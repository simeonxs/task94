import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  
  let result = addBananas();
  function setEmojis(emojis) {
    let wrapper = document.querySelector('.emojis');
    wrapper.innerHTML = "";
    let p = document.createElement('p');
    p.innerText = emojis;
    document.wrapper.appendChild(p);
  }
  
  app.setEmojis(result);
  app.addBananas();
  
  function addBananas() {
    let arr = ["🐒", "🦍", "🦧"];
    arr.map(el => {
      el += "🍌"
    })
    return arr
  }

  
  window.__JS_APP = app;
});
