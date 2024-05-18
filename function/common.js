const { By } = require("selenium-webdriver");
const { M1 } = require("../data/kd/m");
const { P1 } = require("../data/kd/p");
const { MD1 } = require("../data/kd/md");
const { S1 } = require("../data/kd/s");
const moment = require("moment");

const scenarionMapping = {
  P1,
  S1,
  M1,
  MD1,
};

async function login({ driver, user, pass }) {
  let username = await driver.findElement(By.name("username"));
  let password = await driver.findElement(By.name("password"));
  let submitButton = await await driver.findElement(By.className("btn"));

  await username.sendKeys(user);
  await password.sendKeys(pass);
  await submitButton.click();
}

function millisecondsToTime(milli) {
  var seconds = Math.floor((milli / 1000) % 60);
  var minutes = Math.floor((milli / (60 * 1000)) % 60);

  return minutes + " minutes " + seconds + " seconds";
}

async function setFormEtkd({ driver, payload, etdkUrl, etkdListUrl }) {
  const { date, date_input, kd_skp, kd_skp_desc, start_time, end_time } =
    payload;

  // navigate to url form
  await driver.navigate().to(etdkUrl);

  let tanggalElement = await driver.findElement(By.name("tanggal"));
  let keteranganElement = await driver.findElement(By.name("keterangan"));
  let skpSelect = await driver.findElement(By.name("kd_skp"));
  let uraianInput = await driver.findElement(By.name("uraian"));
  let jamMulaiInput = await driver.findElement(By.id("jam1"));
  let jamAkhirInput = await driver.findElement(By.id("jam"));
  let etdkSubmit = await driver.findElement(By.css('input[type="submit"]'));

  // Set Tanggal (using JavaScript to bypass readonly)
  await driver.executeScript(
    "arguments[0].removeAttribute('readonly')",
    tanggalElement,
  );
  await tanggalElement.clear();
  await tanggalElement.sendKeys(date);

  // Set Created Date
  await driver.executeScript(
    "arguments[0].removeAttribute('type')",
    keteranganElement,
  );
  await keteranganElement.clear();
  await keteranganElement.sendKeys(date_input);

  // Select Nama SKP
  await skpSelect.sendKeys(kd_skp);

  // Set Uraian
  await uraianInput.clear();
  await uraianInput.sendKeys(kd_skp_desc);

  // Set Jam Mulai
  await jamMulaiInput.click();
  await jamMulaiInput.sendKeys(start_time);

  // Set Jam Selesai
  await jamMulaiInput.click();
  await jamAkhirInput.sendKeys(end_time);

  // submit Form
  await etdkSubmit.click();

  // // navigate to list
  await driver.navigate().to(etkdListUrl);
}

function randomIntFromInterval(min, max) {
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return String(randomInt);
}

function manipulateDate(date, startHour) {
  if (!startHour) return "startHour invalid";

  let dateTime = date;
  const hour = moment(dateTime).format("HH");

  // if initial date set Hour
  if (hour === "00") dateTime = moment(dateTime).add(startHour, "hour");

  // increment random 35 - 300 seconds;
  dateTime = moment(dateTime).add(randomIntFromInterval(35, 300), "second");

  return dateTime;
}

async function generatePayload({ driver, calendar, etdkUrl, etkdListUrl, startAt }) {
  const { date, day, shift, scenario } = calendar;
  let startHour = 0;
  const scenarioCode = `${shift}${scenario}`;
  let dateInput = moment(date, "MM/DD/YYYY", true);

  switch (shift) {
    case "P":
      startHour = 16;
      break;
    case "S":
      startHour = 22;
      break;
    case "MD":
      startHour = 20;
      break;
    case "M":
      startHour = 10;
      break;
    default:
      break;
  }

  async function processScenarios({
    driver,
    scenarioCode,
    etdkUrl,
    etkdListUrl,
  }) {
    const scenarios = scenarionMapping[scenarioCode];

    for (const item of scenarios) {
      const { kd_skp, kd_skp_desc, start_time, end_time } = item;

      if (start_time === "00:00") {
        dateInput.add(1, "days");
      }
      dateInput = manipulateDate(moment(dateInput), startHour);

      const payload = {
        date: dateInput.format("MM/DD/YYYY"),
        date_input: dateInput.format("DD/MM/YYYY, HH:mm:ss"),
        kd_skp: kd_skp,
        kd_skp_desc: kd_skp_desc,
        start_time: start_time,
        end_time: end_time,
      };

      // Set form
      await setFormEtkd({ driver, payload, etdkUrl, etkdListUrl });
    }
  }

  // Example usage
  processScenarios({ driver, scenarioCode, etdkUrl, etkdListUrl })
    .then(() => {
      const endAt = new Date().getTime();
      const executionTime = endAt - startAt;
      console.log(`Execution Time ${millisecondsToTime(executionTime)}`);
      console.log("All scenarios processed successfully.");
    })
    .catch((error) => {
      console.error("Error processing scenarios:", error);
    });
}

module.exports.login = login;
module.exports.setFormEtkd = setFormEtkd;
module.exports.generatePayload = generatePayload;
