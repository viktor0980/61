import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
   const collection = document.querySelectorAll(".hot");
    let hot = document.createTextNode("🔥");
    collection[0].appendChild(hot);
});
