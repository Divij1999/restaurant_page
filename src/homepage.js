const header = (() => {
    const header=document.createElement("div");
    const name=document.createElement("div");
    const nav=document.createElement("div");

    const home=document.createElement("a");
    const menu=document.createElement("a");
    const contact=document.createElement("a");

    home.href="#";
    menu.href="#";
    contact.href="#";

    home.classList.value="navItem home";
    menu.classList.value="navItem menu";
    contact.classList.value="navItem contact";

    name.innerText="The Bannered Mare";
    home.innerText="Home";
    menu.innerText="Menu";
    contact.innerText="Contact";

    header.classList.add("header");
    name.classList.add("name");
    nav.classList.add("nav");

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(name);
    header.appendChild(nav);
   
    const content= document.getElementById("content");
    content.appendChild(header);

    return [home, menu, contact];

    
})();


const homePage = () => {
    const content = document.createElement("div");
    content.setAttribute("style", "display:flex; flex-direction:column; padding:60px 30px; gap:150px; height:50vh; width:60vw; background-color:rgba(0,0,0,0.8); border: 1px solid black; border-radius:50px;");
    const div= document.createElement("div");
    div.innerText="Welcome";
    div.setAttribute("style", "font-size:3em; color:white; text-align:center;");
    
    const aboutUs= document.createElement("div");
    aboutUs.innerText="Welcome to Whiterun's most popular tavern. Need a place to stay or food to warm your belly? You have come to the right place.  We provide mead, food and a warm and welcoming fire.";
    aboutUs.setAttribute("style", " font-size:2em; color:white; text-align:center;")
    
    content.appendChild(div);
    content.appendChild(aboutUs);

    return content;

};

export {header, homePage};