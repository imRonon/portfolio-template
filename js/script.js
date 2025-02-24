let btn = document.querySelector(".switch");
let text = document.querySelectorAll("h1, a, .extra-text");
let body = document.body;
let hover = document.querySelector("#link");
let sth = document.querySelectorAll(".main-info");
let btn2 = document.querySelector(".other-switch");

let colorChanger = () => {
    for (let i of text) {
        i.style.color = "white";
    }
    body.style.backgroundColor = "black";
    hover.style.color = "white";
    body.style.transition = "all 0.5s ease";
    for (let i of sth) {
        i.style.width = "100%";
    }
    btn.style.display = "none";
    btn2.style.display = "block";
};

let colorCorrector = () => {
    for (let i of text) {
        i.style.color = "";
    }
    body.style.backgroundColor = "white";
    hover.style.color = "black";
    body.style.transition = "all 0.5s ease";
    for (let i of sth) {
        i.style.width = "";
    }
    btn2.style.display = "none";
    btn.style.display = "block";
};
