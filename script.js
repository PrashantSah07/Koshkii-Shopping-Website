let bgColor = document.getElementById("bgColorChange");
let body = document.querySelector("body");
let main = document.getElementsByClassName("main")[0];
let footer = document.querySelector("footer");
let footer1 = document.querySelector(".footer1");
let footer2 = document.querySelector(".footer2");
let footer3 = document.querySelector(".footer3");
let input = document.querySelector("input");
let input2 = document.querySelectorAll("input")[1];
let heading4 = document.querySelector(".heading4");
let txtColor = document.querySelectorAll(".txtColor");
let main11 = document.querySelector(".main11");
let footerbgcolor = document.querySelector(".footerAfter750px");
let footerbgcolor2 = document.querySelector(".footerAfter750px2");
let borderColor = document.querySelectorAll(".border2");
let downArrowBorder = document.querySelectorAll(".downArrowBorder");
let boxes = document.querySelectorAll(".box11");


let isOn = false;

bgColor.addEventListener("click", function () {
    if (isOn) {
        bgColor.style.backgroundColor = "white";
        bgColor.style.animation = "move 0.2s linear 1 forwards";
        body.style.backgroundColor = "rgb(5, 3, 12)";
        main.style.backgroundColor = "rgb(5, 3, 12)";

        txtColor.forEach(txtColor => {
            txtColor.style.color = "#f7d9cb";
            txtColor.style.backgroundColor = "rgb(16 15 15)";
        });

        footer.style.border = " 1px solid rgb(127, 115, 115)";
        footer.style.borderWidth = "1px 0 1px 0"
        footer1.style.backgroundColor = "rgb(5, 3, 12)";
        footer1.style.color = "rgb(127, 115, 115)";
        footer2.style.backgroundColor = "rgb(5, 3, 12)";
        footer2.style.color = "rgb(127, 115, 115)";
        footer3.style.backgroundColor = "rgb(5, 3, 12)";
        footer3.style.color = "rgb(127, 115, 115)";
        input.style.backgroundColor = "rgb(5, 3, 12)";
        input.style.color = "white"
        input2.style.backgroundColor = "rgb(5, 3, 12)";
        input2.style.color = "white";
        heading4.style.backgroundColor = "rgb(5, 3, 12)";
        main11.style.backgroundColor = "rgb(5, 3, 12)";
        footerbgcolor.style.backgroundColor = "rgb(5, 3, 12)"
        footerbgcolor2.style.backgroundColor = "rgb(5, 3, 12)"
        footerbgcolor.style.color = "rgb(127, 115, 115)";
        footerbgcolor2.style.color = "rgb(127, 115, 115)";
        footerbgcolor.style.borderColor = "rgb(127, 115, 115)";
        footerbgcolor2.style.borderColor = "rgb(127, 115, 115)";
        navbarAfter750px.style.backgroundColor = "rgb(5, 3, 12)";
        button2.style.backgroundColor = "rgb(5, 3, 12)";

        for (let a of borderColor) {
            a.style.borderColor = "#784141";
        }

        for (let a = 0; a < downArrowBorder.length; a++) {
            downArrowBorder[a].style.borderColor = "#784141"
        }

        boxes.forEach(box => {
            box.style.backgroundColor = 'rgb(16 15 15)';
            box.style.color = "white";
        });

    } else {
        bgColor.style.backgroundColor = "black";
        bgColor.style.animation = "moveBack 0.2s linear 1 forwards";
        body.style.backgroundColor = "white";
        main.style.backgroundColor = "white";


        txtColor.forEach(txtColor => {
            txtColor.style.color = "black";
            txtColor.style.backgroundColor = "white";
        });

        footer.style.border = "none";
        footer1.style.backgroundColor = "#f7d9cb";
        footer1.style.color = "rgb(96, 74, 74)";
        footer2.style.backgroundColor = "#f7d9cb";
        footer2.style.color = "rgb(96, 74, 74)";
        footer3.style.backgroundColor = "#f7d9cb";
        footer3.style.color = "rgb(96, 74, 74)";
        input.style.backgroundColor = "rgb(255 255 255)";
        input.style.color = "black"
        input2.style.backgroundColor = "#f7d9cb";
        input2.style.color = "black";
        heading4.style.backgroundColor = "#f2f0f0";
        main11.style.backgroundColor = "#f2f0f0";
        footerbgcolor.style.backgroundColor = "#f7d9cb"
        footerbgcolor2.style.backgroundColor = "#f7d9cb"
        footerbgcolor.style.color = "rgb(96, 74, 74)";
        footerbgcolor2.style.color = "rgb(96, 74, 74)";
        footerbgcolor.style.borderColor = "rgb(0, 0, 0, 0.1)";
        footerbgcolor2.style.borderColor = "rgb(0, 0, 0, 0.1)";
        navbarAfter750px.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";

        boxes.forEach(box => {
            box.style.backgroundColor = 'white';
            box.style.color = "black";
        });
    }
    isOn = !isOn;
});


let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para1Content = document.querySelector(".para1-content");
let para2Content = document.querySelector(".para2-content");



let isOn2 = false

para1.addEventListener("click", function () {
    if (isOn2) {
        para1Content.style.display = "block";
        para1Content.style.animation = "translateY 0.2s linear 1"
    }
    else {
        para1Content.style.display = "none";
    }
    isOn2 = !isOn2;
})

let isOn3 = false;

para2.addEventListener("click", function () {
    if (isOn3) {
        para2Content.style.display = "block";
        para2Content.style.animation = "translateY 0.2s linear 1"
    }
    else {
        para2Content.style.display = "none";
    }

    isOn3 = !isOn3;
})



let menu = document.querySelector(".menu");
let sliderMenu = document.getElementsByClassName("slider-menu")[0];
let navbarAfter750px = document.querySelector(".navbarAfter750px");


menu.addEventListener("click", function () {
    if (true) {
        navbarAfter750px.style.display = "block";
        body.style.overflow = "hidden";
        navbarAfter750px.style.animation = "navbaranime-X 0.2s linear 1"
    }
});

sliderMenu.addEventListener("click", function () {
    if (true) {
        body.style.overflow = "auto";
        navbarAfter750px.style.animation = "navbaranime-X-Back 0.2s linear 1 forwards "

    }
});


let sale = document.querySelector(".sale");
let sarees = document.querySelector(".sarees");
let dressMaterial = document.querySelector(".dress-material");
let salwarSuit = document.querySelector(".salwar-suit");
let lehengas = document.querySelector(".lehengas");
let others = document.querySelector(".others");
let newArrivals = document.querySelector(".new-arrivals");
let occasions = document.querySelector(".occasions");

let salee = document.querySelector(".salee");
let sareess = document.querySelector(".sareess");
let dressmateriall = document.querySelector(".dress-materiall");
let salwarSuitt = document.querySelector(".salwar-suitt")
let lahengass = document.querySelector(".lahengass");
let otherss = document.querySelector(".otherss");
let newarrivalss = document.querySelector(".new-arrivalss");
let occasionss = document.querySelector(".occasionss");
let downArrow = document.querySelector('.down-arrow');
let button2 = document.querySelector(".button2");

let isOn4 = false;

salee.addEventListener("click", function () {
    if (isOn4) {
        sale.style.display = "block"
        sale.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        sale.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";

    }

    isOn4 = !isOn4;
});


let isOn5 = false;

sareess.addEventListener("click", function () {
    if (isOn5) {
        sarees.style.display = "block"
        sarees.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        sarees.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn5 = !isOn5;
});


let isOn6 = false;

dressmateriall.addEventListener("click", function () {
    if (isOn6) {
        dressMaterial.style.display = "block"
        dressMaterial.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        dressMaterial.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn6 = !isOn6;
});

let isOn7 = false;

salwarSuitt.addEventListener("click", function () {
    if (isOn7) {
        salwarSuit.style.display = "block"
        salwarSuit.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        salwarSuit.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn7 = !isOn7;
});

let isOn8 = false;

lahengass.addEventListener("click", function () {
    if (isOn8) {
        lehengas.style.display = "block"
        lehengas.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        lehengas.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn8 = !isOn8;
});

let isOn9 = false;

otherss.addEventListener("click", function () {
    if (isOn9) {
        others.style.display = "block";
        others.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        others.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn9 = !isOn9;
});

let isOn10 = false;

newarrivalss.addEventListener("click", function () {
    if (isOn10) {
        newArrivals.style.display = "block"
        newArrivals.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        newArrivals.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn10 = !isOn10;
});

let isOn11 = false;

occasionss.addEventListener("click", function () {
    if (isOn11) {
        occasions.style.display = "block"
        occasions.style.animation = "navbaranime-Y 0.2s linear 1"
        downArrow.style.transform = "rotateX(180deg)";
        downArrow.style.transition = '0.2s';
    }
    else {
        occasions.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
        downArrow.style.transform = "rotateX(0deg)";
    }

    isOn11 = !isOn11;
});

let ByOffer = document.querySelector(".ByOffer");
let byOffer = document.querySelector(".byOffer");
let ByDiscount = document.querySelector(".ByDiscount");
let byDiscount = document.querySelector(".byDiscount");
let ByCategory = document.querySelector(".ByCategory");
let byCategory = document.querySelector(".byCategory");
let ByOccasion = document.querySelector(".ByOccasion");
let byOccasion = document.querySelector(".byOccasion");
let ByType = document.querySelector(".ByType");
let byType = document.querySelector(".byType");
let ByMaterial = document.querySelector(".ByMaterial");
let byMaterial = document.querySelector(".byMaterial");
let ByColour = document.querySelector(".ByColour");
let byColour = document.querySelector(".byColour");
let ByType2 = document.querySelector(".ByType2");
let byType2 = document.querySelector(".byType2");
let ByMaterial2 = document.querySelector(".ByMaterial2");
let byMaterial2 = document.querySelector(".byMaterial2");
let ByColour2 = document.querySelector(".ByColour2");
let byColour2 = document.querySelector(".byColour2");
let ByOccasion2 = document.querySelector(".ByOccasion2");
let byOccasion2 = document.querySelector(".byOccasion2");
let ByType3 = document.querySelector(".ByType3");
let byType3 = document.querySelector(".byType3");
let ByColour3 = document.querySelector(".ByColour3");
let byColour3 = document.querySelector(".byColour3");
let ByOccasion3 = document.querySelector(".ByOccasion3");
let byOccasion3 = document.querySelector(".byOccasion3");
let ByType4 = document.querySelector(".ByType4");
let byType4 = document.querySelector(".byType4");
let ByMaterial3 = document.querySelector(".ByMaterial3");
let byMaterial3 = document.querySelector(".byMaterial3");
let ByColour4 = document.querySelector(".ByColour4");
let byColour4 = document.querySelector(".byColour4");

let isOn12 = false;

ByOffer.addEventListener("click", function () {
    if (isOn12) {
        byOffer.style.display = "block";
        byOffer.style.animation = "navbaranime-Y 0.2s linear 1"
    }
    else {
        byOffer.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards"
    }

    isOn12 = !isOn12;
});


let isOn13 = false;

ByDiscount.addEventListener("click", function () {
    if (isOn13) {
        byDiscount.style.display = "block";
        byDiscount.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byDiscount.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn13 = !isOn13;
});


let isOn14 = false;

ByCategory.addEventListener("click", function () {
    if (isOn14) {
        byCategory.style.display = "block";
        byCategory.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byCategory.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn14 = !isOn14;
});


let isOn15 = false;

ByOccasion.addEventListener("click", function () {
    if (isOn15) {
        byOccasion.style.display = "block";
        byOccasion.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byOccasion.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn15 = !isOn15;
});


let isOn16 = false;

ByType.addEventListener("click", function () {
    if (isOn16) {
        byType.style.display = "block";
        byType.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byType.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn16 = !isOn16;
});



let isOn17 = false;

ByMaterial.addEventListener("click", function () {
    if (isOn17) {
        byMaterial.style.display = "block";
        byMaterial.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byMaterial.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn17 = !isOn17;
});


let isOn18 = false;

ByColour.addEventListener("click", function () {
    if (isOn18) {
        byColour.style.display = "block";
        byColour.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byColour.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn18 = !isOn18;
});


let isOn19 = false;

ByType2.addEventListener("click", function () {
    if (isOn19) {
        byType2.style.display = "block";
        byType2.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byType2.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn19 = !isOn19;
});



let isOn20 = false;

ByMaterial2.addEventListener("click", function () {
    if (isOn20) {
        byMaterial2.style.display = "block";
        byMaterial2.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byMaterial2.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn20 = !isOn20;
});


let isOn21 = false;

ByColour2.addEventListener("click", function () {
    if (isOn21) {
        byColour2.style.display = "block";
        byColour2.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byColour2.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn21 = !isOn21;
});


let isOn22 = false;

ByOccasion2.addEventListener("click", function () {
    if (isOn22) {
        byOccasion2.style.display = "block";
        byOccasion2.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byOccasion2.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn22 = !isOn22;
});


let isOn23 = false;

ByType3.addEventListener("click", function () {
    if (isOn23) {
        byType3.style.display = "block";
        byType3.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byType3.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn23 = !isOn23;
});


let isOn24 = false;

ByColour3.addEventListener("click", function () {
    if (isOn24) {
        byColour3.style.display = "block";
        byColour3.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byColour3.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn24 = !isOn24;
});

let isOn25 = false;

ByOccasion3.addEventListener("click", function () {
    if (isOn25) {
        byOccasion3.style.display = "block";
        byOccasion3.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byOccasion3.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn25 = !isOn25;
});

let isOn26 = false;

ByType4.addEventListener("click", function () {
    if (isOn26) {
        byType4.style.display = "block";
        byType4.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byType4.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn26 = !isOn26;
});

let isOn27 = false;

ByMaterial3.addEventListener("click", function () {
    if (isOn27) {
        byMaterial3.style.display = "block";
        byMaterial3.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byMaterial3.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn27 = !isOn27;
});

let isOn28 = false;

ByColour4.addEventListener("click", function () {
    if (isOn28) {
        byColour4.style.display = "block";
        byColour4.style.animation = "navbaranime-Y 0.2s linear 1";

    }
    else {
        byColour4.style.animation = "navbaranime-Y-Back 0.2s linear 1 forwards";
    }

    isOn28 = !isOn28;
}); 
