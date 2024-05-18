const {By, Builder, Key, Browser} = require('selenium-webdriver');
const { login, setFormEtkd, generatePayload } = require('./function/setForm');
const { calendarList } = require('./data/calendar');

const user = "10207320000223202310320";
const pass = "rsudkalid";
const loginUrl = "https://rsudkalideres.com/etkd/index.php";
const etdkUrl = "https://rsudkalideres.com/etkd/media.php?module=kinerja&act=input";
const etkdListUrl = `https://rsudkalideres.com/etkd/media.php?module=kinerja&act=detail&nip=${user}`;
// const payload = {
//   date: "05/01/2024", // MM/DD/YYY
//   date_input: "18/05/2024, 16:15:07", // DD/MM/YYY, hh:mm:ss
//   kd_skp: "Melakukan operan jaga setiap pergantian shift",
//   kd_skp_desc: "Melakukan operan shift dan mengerjakan operan yang belum selesai dari shift sebelumnya",
//   start_time: "14:00", //hh:mm
//   end_time: "14:15", // hh:mm
//   isSubmit: false,
// };

(async function firstTest() {
  let driver;
  
  try {
    /* ************* open chrome browser ************* */
    // driver = await new Builder().forBrowser(Browser.CHROME).build();
    
    /* ************* login ************* */
    // await driver.get(loginUrl);
    // await login({ driver, user, pass})

    /* ************* starting ************* */
    
    // input code here............

    for (const item of calendarList) {
      // don't run function if "L", "XL", "LD"
      if (["L", "XL", "LD"].includes(item.shift)) continue;

    /* ************* generate payload ************* */
    const payload = generatePayload(item);
      
    /* ************* input ETKD ************* */
    // await setFormEtkd({ driver, payload });

    }


    /* ************* finished ************* */

  } catch (e) {
    console.log(e)
  } finally {
    // await driver.quit();
  }
}())