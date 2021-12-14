const puppeteer = require("puppeteer");

const url = "https://www.taobao.com/?spm=a1z02.1.1581860521.1.pXrAVd";
const username = "nozveradu";
const password = "Jim@xc1990";
const searchterm = "metal build";

const chromePaths = require("chrome-paths");

const run = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromePaths.chrome,
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(".h");
    await page.click(".h");
    await page.evaluate(() => {
        Object.defineProperty(navigator, "webdriver", { get: () => false });
    });
    // const frame = await page
    //     .frames()
    //     .find((frame) => !!~frame.url().search("login.taobao"));
    await page.waitForSelector("#fm-login-id");
    await page.type("#fm-login-id", username);
    await page.type("#fm-login-password", password);
    await page.click(".fm-button");
    await page.waitForSelector(".search-combobox");
    await page.type("#q", searchterm);
    await page.click(".btn-search");

    // if (true) {
    //     const sliderHandle = await frame.$("#nc_1_n1z");
    //     const sliderElement = await frame.$("#nc-lang-cnt");
    //     if (sliderHandle) {
    //         const handle = await sliderHandle.boundingBox();
    //         const slider = await sliderElement.boundingBox();
    //         const initialX = Math.floor(handle.x + handle.width / 2);
    //         const initialY = Math.floor(handle.y + handle.height / 2);
    //         const finalX = Math.floor(handle.x + slider.width);
    //         const finalY = Math.floor(handle.y + handle.height / 2);
    //         await page.mouse.move(initialX, initialY);
    //         await page.mouse.down();
    //         await page.mouse.move(finalX, finalY, { steps: 50 });
    //         await page.mouse.up();
    //     }
    // }
};

run();
