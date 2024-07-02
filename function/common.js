const { By, Key } = require("selenium-webdriver");
const { M1, M2 } = require("../data/kd/m");
const { P1, P2 } = require("../data/kd/p");
const { MD1, MD2 } = require("../data/kd/md");
const { S1, S2 } = require("../data/kd/s");
const moment = require("moment");

const scenarionMapping = {
  P1,
  P2,
  S1,
  S2,
  M1,
  M2,
  MD1,
  MD2,
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

  // Navigate to URL form
  await driver.navigate().to(etdkUrl);

  let tanggalElement = await driver.findElement(By.name("tanggal"));
  let keteranganElement = await driver.findElement(By.name("keterangan"));
  let skpSelect = await driver.findElement(By.name("kd_skp"));
  let uraianInput = await driver.findElement(By.name("uraian"));
  let jamMulaiInput = await driver.findElement(By.name("jam_mulai"));
  let jamAkhirInput = await driver.findElement(By.name("jam_akhir"));
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

  // Click field and perform Ctrl+A before setting Jam Mulai
  await jamMulaiInput.click();
  await jamMulaiInput.sendKeys(Key.chord(Key.CONTROL, "a"));
  await jamMulaiInput.sendKeys(start_time);

  // Click field and perform Ctrl+A before setting Jam Selesai
  await jamAkhirInput.click();
  await jamAkhirInput.sendKeys(Key.chord(Key.CONTROL, "a"));
  await jamAkhirInput.sendKeys(end_time);

  // Submit Form
  await etdkSubmit.click();

  // Navigate to list
  await driver.navigate().to(etkdListUrl);
}

function randomIntFromInterval(min, max) {
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return String(randomInt);
}

function manipulateDate(date, startHour, start_time) {
  if (!startHour) return "startHour invalid";

  let dateTime = date;

  if (start_time === "0000" || start_time === "0100" || start_time === "0300" ||start_time === "0430" || start_time === "0600" ||start_time === "0630" ||start_time === "0730") {
    dateTime.add(1, 'days');
    return moment(dateTime);
  } else {
    return moment(date)
  }
}

function manipulateDate2(shift, date, startHour) {
  if (!startHour) return "startHour invalid";

  let dateTime = date;

  // if initial date set Hour
  if (shift === "M") {
    dateTime = moment(dateTime).add(startHour, "hour").add(1, "days");
  } else {
    dateTime = moment(dateTime).add(startHour, "hour")
  }

  // increment random 35 - 300 seconds;
  dateTime = moment(dateTime).add(randomIntFromInterval(300, 3500), "second");

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
    shift,
    driver,
    scenarioCode,
    etdkUrl,
    etkdListUrl,
  }) {
    const scenarios = scenarionMapping[scenarioCode];

    for (const item of scenarios) {
      const { kd_skp, kd_skp_desc, start_time, end_time } = item;

      const ddate2 = moment(date, "MM/DD/YYYY", true);

      const newDateInput = manipulateDate(moment(dateInput), startHour, start_time);
      const newDateInput2 = manipulateDate2(shift, moment(ddate2), startHour)

      const payload = {
        date: newDateInput.format("MM/DD/YYYY"),
        date_input: newDateInput2.format("DD/MM/YYYY, HH:mm:ss"),
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
  await processScenarios({ shift, driver, scenarioCode, etdkUrl, etkdListUrl })
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
