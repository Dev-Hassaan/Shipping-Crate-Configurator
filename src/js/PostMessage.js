export default function SnedPostMessage(appID, msg, debug=true) {
    debug ? console.log(msg) : 0
    appID.contentWindow.postMessage(msg, "*")
}