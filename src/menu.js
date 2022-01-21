import sweetRoll from "./sweeteroll.jpeg";
import dumpling from "./dumpling.png";
import soufle from "./souflee.jpeg";
import applePie from "./applepie.jpg";
import jazbayPie from "./jazbaypie.png";
import honningMead from "./honningbrew.jpeg";

const menu = () => {

    let dishes=[
        {
            name:"Chicken Dumpling",
            image: dumpling,
            description:"These dumplings are a specialty of many an inn across Skyrim, where travelers can enjoy them hot after a long day's journey, but they're also a popular pick in one's own homestead kitchen."
        },
        {
            name:"Sweet Roll",
            image: sweetRoll,
            description:"Crisp and crunchy on the outside, moist and soft on the inside, this is a truly legendary treat."
        },
        {
            name:"Sunlight Soufflé",
            image:soufle,
            description:"This Breton dish is actually simple enough to make, even if you don't have a hickory wood spoon. The result is a light, fluffy meal of egg and cheese with an exquisite flavor that can easily be tweaked and embellished to your own tastes."
        },
        {
            name:"Jorrvaskr Apple Pie",
            image:applePie,
            description:"This age-old recipe was passed down to me by Jorrvaskr’s caretaker, Tilma the Haggard, and is a favourite of the Companions and can always be found at their tables. With a crumbly, buttery crust and an irresistible spiced apple filling."
        },
        {
            name:"Skyrim jazbay crostata",
            image:jazbayPie,
            description:"Jazbay grapes are found on rocky terrain or near hot springs throughout Skyrim. Their rich flavour is so prized that in olden times, permission was required from the Emperor to pick them. While they are no longer banned to the common folk, gathering jazbay is tiresome as they are still rare."
        },
        {
            name:"HonningBrew Mead",
            image:honningMead,
            description:"Known throughout Skyrim as the finest mead outside of Sovngarde, Honningbrew's reputation is well deserved. Pulling ingredients from their own hives and the surrounding meadows, Sabjorn has crafted a perfectly balanced brew that pleases revelers far and wider."
        },
       
    ];

    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    for(let i=0; i<6; ++i){
        const dish = document.createElement("div");
        

        dish.classList.add("dish");
        const dishName = document.createElement("div");
        dishName.innerText=dishes[i].name;
        dishName.setAttribute("style", "font-size:1.5em; font-weight:bold; border-bottom:1px solid black; font-style:normal;")
        
        const dishBody = document.createElement("div");
       
        const dishImage = document.createElement("img");
        dishImage.src=dishes[i].image;
        dishImage.setAttribute("style", "height:auto; width:230px;")
        
        const dishInfo = document.createElement("div");
        dishInfo.setAttribute("style", "align-self:center;")
        dishInfo.innerText=dishes[i].description;

        dishBody.setAttribute("style", "display:flex; gap:70px; height:100%; width:100%;");

        dishBody.appendChild(dishImage);
        dishBody.appendChild(dishInfo);
        dish.appendChild(dishName);
        dish.appendChild(dishBody);

        menu.appendChild(dish);
        
    }

    return menu;
};

export {menu};