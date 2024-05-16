import fetch from "node-fetch";
import { HttpProxyAgent } from "http-proxy-agent";

async function fetchData(url) {
  try {
    // initialize the local proxy agent
    const proxyAgent = new HttpProxyAgent(
      "http://localhost:8080"
    );
    // connect to the target site through the
    // local proxy
    const response = await fetch(url, {
      agent: proxyAgent,
    });

    // retrieve the HTML returned by the
    // server and print it
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("http://toscrape.com/");
