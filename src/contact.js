const contact = () => {
    const contact=document.createElement("div");
    contact.setAttribute("style", "width:60vw; height: 20vh; padding:40px; text-align: center; color:white; background-color:rgba(0,0,0,0.8); font-size:2em;");
    contact.innerText="Location: Whiterun, Plain's District, Market Area";

    return contact;
};

export {contact};