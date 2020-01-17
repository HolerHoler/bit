const isDev = process.env.NODE_ENV === "development";
let baseUrl = '';
if (isDev) {
    // baseUrl = "http://localhost:81";
    baseUrl = "http://aa.com";
} else {
    if (window.location.port === 81) {
        baseUrl = "http://localhost:81";
    } else {
        baseUrl = "http://www.bitzg.cn";
    }

}

export default {
    baseUrl
}