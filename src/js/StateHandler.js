import $ from 'jquery'
import SnedPostMessage from './PostMessage'
export default function StateHandler(element, event) {
    let app = document.getElementById("app")
    $(element).on(event, function() {
        $(element).removeClass("active")
        $(this).addClass("active")
        app == null ? 0 : SnedPostMessage(app, $(this).attr("id"))
    })
}

