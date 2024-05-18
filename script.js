const { Builder, Browser } = require("selenium-webdriver");
const { login, generatePayload } = require("./function/common");
const { calendarList } = require("./data/calendar");

const user = "";
const pass = "";
const loginUrl = "https://rsudkalideres.com/etkd/index.php";
const etdkUrl =
  "https://rsudkalideres.com/etkd/media.php?module=kinerja&act=input";
const etkdListUrl = `https://rsudkalideres.com/etkd/media.php?module=kinerja&act=detail&nip=${user}`;

(async function firstTest() {
  const startAt = new Date().getTime();
  let driver;

  console.log("Processing..............");

  try {
    // open chrome browser
    driver = await new Builder().forBrowser(Browser.CHROME).build();

    // login
    await driver.get(loginUrl);
    await login({ driver, user, pass });

    for await (const calendar of calendarList) {
      // don't run function if "L", "XL", "LD"
      if (["L", "XL", "LD"].includes(calendar.shift)) continue;

      //  generate form
      await generatePayload({ driver, calendar, etdkUrl, etkdListUrl, startAt });
    }

    return;
  } catch (e) {
    console.log(e);
  } finally {
    // await driver.quit();
  }
})();
