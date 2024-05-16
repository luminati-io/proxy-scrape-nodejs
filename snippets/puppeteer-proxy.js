import puppeteer from "puppeteer";

(async () => {
    // pass the URL of the local proxy to
    // the `--proxy-server` flag to configure it in Chrome
    const browser = await puppeteer.launch({
        args: ["--proxy-server=http://localhost:8080"]
    });

    // open a new page and visit the target site
    const page = await browser.newPage();
    await page.goto("http://toscrape.com/");

    // retrieve the HTML content of the page
    // and log it
    const content = await page.content();
    console.log(content);

    // release the browse recources
    await browser.close();
})();
