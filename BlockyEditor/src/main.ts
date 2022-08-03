
import { Blocky } from './lib'

document.addEventListener("DOMContentLoaded", function () {
  let ed = document.getElementById("ed");
  if (ed) {
    ed.addEventListener("input", function () {});
  }
});

window.addEventListener("paste", function (event: ClipboardEvent) {
  //event.preventDefault();

  let clipboardData = event.clipboardData;
  if (clipboardData) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(
      clipboardData.getData("text/html"),
      "text/html"
    );
    //console.log(clipboardData.getData("text/html"))
    
    let blocky: Blocky = Blocky.fromHtml(doc)

    console.log(blocky)
  }
} as EventListener);