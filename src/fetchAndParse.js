import markdown from "markdown";
const filename = "https://clientx.fr/uploads/eula/eula-10-august.md";

export default  function (){
    return fetch(filename).then(response => markdown.parse(response.text()))
}