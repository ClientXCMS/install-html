import MarkdownIt from "markdown-it";
import JQuery from "jquery";
const filename = "eula.md";
fetch(filename).then(response => response.text().then((string) => {
    return new MarkdownIt().render(string)
})).then((value) => {
    $("#eula-text").html(value)
    JQuery(function($) {
        $('#eula-text').on('scroll', function() {
            if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                $("#accepteula").removeClass("d-none");
                $("#accepteula").click(() => {
                    toggleClass('eula')
                    toggleClass('home')
                    $("#accepteula").addClass("d-none");
                })
            }
        })
    });
})

const toggleClass = function(name) {
    $("#" + name + "-tab" ).toggleClass("active")
    $("#" + name).toggleClass("active")
}