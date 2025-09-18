"use strict";
$(document).ready(function () {
    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");
    function setUserName() {
        const myName = prompt("Please enter your name.");
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Saytımıza xoş gəlmisən dəyərli, ${storedName}`;
    }
    myButton.addEventListener("click", () => {
        setUserName();
    });
    function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName) {
            setUserName();
        } else {
            localStorage.setItem("name", myName);
            myHeading.textContent = `Saytımıza xoş gəlmisən dəyərli, ${myName}`;
        }
    }
});