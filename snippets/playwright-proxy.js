import { chromium } from "playwright";

(async () => {
  // create a Chromium instance with
  // the local proxy configuration
  const browser = await chromium.launch({
    proxy: {
      server: "http://localhost:8080",
    },
  });

  // add a new tab and connect to the
  // target page
  const page = await browser.newPage();
  await page.goto("http://toscrape.com/");

  // extract the HTML content of the page
  // and log it
  const content = await page.content();
  console.log(content);

  // release the browser resources
  await browser.close();
})();
