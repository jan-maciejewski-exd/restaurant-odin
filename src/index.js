console.log('test');

import { loadHomePage } from "./home.js";
import { loadAbout } from "./about.js";
import { renderActive } from "./buttons.js"
import "./styles.css";

loadHomePage();


handleHomeBtn: new function() {
    const button = document.querySelector("#home");
    button.addEventListener("click", ()=> {
        renderActive
        loadHomePage()
    });
};

handleAboutBtn: new function() {
    const button = document.querySelector("#about");
    button.addEventListener("click", ()=> {
        renderActive
        loadAbout();
    });
};
