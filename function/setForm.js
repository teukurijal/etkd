const { By } = require('selenium-webdriver');

async function login({  driver, user, pass }) {
  let username = await driver.findElement(By.name('username'));
  let password = await driver.findElement(By.name('password'));
  let submitButton = await await driver.findElement(By.className('btn'));

  await username.sendKeys(user);
  await password.sendKeys(pass);
  await submitButton.click();
};

async function setFormEtkd({driver, payload }) {
    const { 
      date,
      date_input,
      kd_skp,
      kd_skp_desc,
      start_time,
      end_time,
      isSubmit = true,
    } = payload;

    // navigate to url form
    await driver.navigate().to(etdkUrl);

    // Set Tanggal (using JavaScript to bypass readonly)
    let tanggalElement = await driver.findElement(By.name('tanggal'));
    await driver.executeScript("arguments[0].removeAttribute('readonly')", tanggalElement);
    await tanggalElement.clear();
    await tanggalElement.sendKeys(date);

    // Set Created Date
    let keteranganElement = await driver.findElement(By.name('keterangan'));
    await driver.executeScript("arguments[0].removeAttribute('type')", keteranganElement);
    await keteranganElement.clear();
    await keteranganElement.sendKeys(date_input);

    // Select Nama SKP
    let skpSelect = await driver.findElement(By.name('kd_skp'));
    await skpSelect.sendKeys(kd_skp);

    // Set Uraian
    let uraianInput = await driver.findElement(By.name('uraian'));
    await uraianInput.clear();
    await uraianInput.sendKeys(kd_skp_desc);

    // Set Jam Mulai
    let jamMulaiInput = await driver.findElement(By.id('jam1'));
    await jamMulaiInput.click();
    await jamMulaiInput.sendKeys(start_time); // Example time

    // Set Jam Selesai
    let jamAkhirInput = await driver.findElement(By.id('jam'));
    await jamMulaiInput.click();
    await jamAkhirInput.sendKeys(end_time); // Example time

    // Submit the form
    let etdkSubmit = await driver.findElement(By.css('input[type="submit"]'));
    if (isSubmit) await etdkSubmit.click();

    // navigate to list
    await driver.navigate().to(etkdListUrl);

};

function generatePayload(item) {
  const {date, day, shift, scenario } = item;
};

module.exports.login = login;
module.exports.setFormEtkd = setFormEtkd;
module.exports.generatePayload = generatePayload;


