function wijzigAchtergrondEnAfbeelding() {
    if (button1.innerHTML == 0 && button2.innerHTML == 0 && button3.innerHTML == 0) {
        image.src = "images/bg0.jpg";
        image1.src = "images/0.jpg";
    } else if (button1.innerHTML == 1 && button2.innerHTML == 1 && button3.innerHTML == 1) {
        image.src = "images/bg3.jpg";
        image1.src = "images/3.jpg";
    } else if (button1.innerHTML == 1 && button2.innerHTML == 1 || button1.innerHTML == 1 && button3.innerHTML == 1 || button2.innerHTML == 1 && button3.innerHTML == 1) {
        image.src = "images/bg2.jpg";
        image1.src = "images/2.jpg";
    } else {
        image.src = "images/bg1.jpg";
        image1.src = "images/1.jpg";
    }
}
  
function verhoogWaarde(button) {
    if(button.style.backgroundColor == "red") return;
    var waarde = parseInt(button.innerHTML);
    if (waarde == 1) {
        waarde--;
    } else {
        waarde++;
    }
    button.innerHTML = waarde;
    button.style.backgroundColor = "red"; 
    wijzigAchtergrondEnAfbeelding();
}
  
button1.addEventListener("click", function() {
    verhoogWaarde(button1);
    button2.style.backgroundColor = ""; 
    button3.style.backgroundColor = "";
});
  
button2.addEventListener("click", function() {
    verhoogWaarde(button2);
    button1.style.backgroundColor = "";
    button3.style.backgroundColor = "";
});
  
button3.addEventListener("click", function() {
    verhoogWaarde(button3);
    button1.style.backgroundColor = ""; 
    button2.style.backgroundColor = "";
});
