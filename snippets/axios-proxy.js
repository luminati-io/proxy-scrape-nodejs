import axios from "axios";

async function fetchDataWithBrightData(url) {
    // configuration to instruct Axios
    // to route the traffic through the specified proxy
    const proxyOptions = {
        proxy: {
            host: "<BRIGHTDATA_PROXY_HOST>",
            port: "<BRIGHTDATA_PROXY_PORT>",
            auth: {
                username: "<BRIGHTDATA_PROXY_USERNAME>",
                password: "<BRIGHTDATA_PROXY_PASSWORD>"
            }
        }
    };


    try {
        // connect to the target page
        // and log the server response
        const response = await axios.get(url, proxyOptions);
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataWithBrightData("http://lumtest.com/myip.json");
