/* eslint-disable @typescript-eslint/no-var-requires */
const {BrowserWindow, app} = require("electron");
const assert = require("assert");
const pie = require("puppeteer-in-electron");
const puppeteer = require("puppeteer-core");

const numbers = 1

let agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'


const url = "https://www.whatismybrowser.com/detect/what-is-my-user-agent"

const main = async () => {
  await pie.initialize(app);
  const browser = await pie.connect(app, puppeteer);
 
  const window = new BrowserWindow();
  for (let i = 0; i < numbers; i++) {
    // click on thing if its there
    
    await window.loadURL(url);
    
    const page = await pie.getPage(browser, window);
    await page.setUserAgent(agent);
    console.log(await browser.userAgent());
    await page.goto(url);

    //clear cache
    const client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCookies');
    await client.send('Network.clearBrowserCache');
    

  }


};

main();
