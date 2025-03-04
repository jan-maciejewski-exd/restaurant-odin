console.log('test');

import { loadHomePage } from "./home.js";
import { loadAbout } from "./about.js";

loadHomePage();

handleHomeBtn: new function() {
    const button = document.querySelector("#home");
    button.addEventListener("click", ()=> {
        loadHomePage()
    });
};

handleAboutBtn: new function() {
    const button = document.querySelector("#about");
    button.addEventListener("click", ()=> {
        loadAbout();
    });
};
