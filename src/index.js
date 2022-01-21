import {header, homePage} from "./homepage.js";
import {menu} from "./menu";
import {contact} from "./contact.js";
import "./style.css";

const display = (() => {
    const body = document.getElementById("content");

    const content= document.createElement("div");
    content.setAttribute("style", "display:flex; justify-content:center; padding:10vh; margin-top: 15vh;");
    body.appendChild(content);
    
    content.appendChild(homePage());

    const toggleContent = (e) => {

        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
        if(e.target.classList.value==="navItem home"){
            content.appendChild(homePage());
        }
        else if(e.target.classList.value==="navItem menu"){
            
            content.appendChild(menu());
        }
        else if(e.target.classList.value==="navItem contact"){
            content.appendChild(contact());
        }
        

    };

    header.forEach(navItem => navItem.addEventListener("click", toggleContent));
})();