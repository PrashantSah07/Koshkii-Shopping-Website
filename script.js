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
        para1Content.style.animation = "translateX 0.2s linear 1"
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
        para2Content.style.animation = "translateX 0.2s linear 1"
    }
    else {
        para2Content.style.display = "none";
    }

    isOn3 = !isOn3;
})