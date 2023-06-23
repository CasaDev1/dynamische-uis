function wijzigAchtergrondEnAfbeelding() {
    if (button1.style.backgroundColor === "red") {
        image.src = "images/1.jpg";
        image1.src = "images/bg1.jpg";
    } else if (button2.style.backgroundColor === "red") {
        image.src = "images/2.jpg";
        image1.src = "images/bg2.jpg";
    } else if (button3.style.backgroundColor === "red") {
        image.src = "images/3.jpg";
        image1.src = "images/bg3.jpg";
    } else {
        image.src = "images/0.jpg";
        image1.src = "images/bg0.jpg";
    }
}

function verhoogWaarde(button) {
    if (button.style.backgroundColor === "red") return;
    var waarde = parseInt(button.innerHTML);
    waarde++;

    button.innerHTML = waarde;
    button.style.backgroundColor = "red";

    if (button === button1) {
        button2.style.backgroundColor = "";
        button3.style.backgroundColor = "";
    } else if (button === button2) {
        button1.style.backgroundColor = "";
        button3.style.backgroundColor = "";
    } else if (button === button3) {
        button1.style.backgroundColor = "";
        button2.style.backgroundColor = "";
    }

    wijzigAchtergrondEnAfbeelding();
}

button1.addEventListener("click", function() {
    verhoogWaarde(button1);
});

button2.addEventListener("click", function() {
    verhoogWaarde(button2);
});

button3.addEventListener("click", function() {
    verhoogWaarde(button3);
});
