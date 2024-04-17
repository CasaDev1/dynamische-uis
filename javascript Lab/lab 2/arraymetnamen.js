let userInput = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
let Arr = [];

while (userInput < 3){
    userInput = prompt("Ongeldige invoer. Voer opnieuw het aantal namen in (minimaal 3):")
}

for (let i = 0; i < userInput; i++){
    let namen = prompt(`Voer naam ${i + 1} in: `);
    Arr.push(namen);
}

let arrayNamen = document.getElementById("arrayNamen");
let arrayOmgekeerdNamen = document.getElementById("arrayOmgekeerdNamen");

Arr.forEach(function(namen) {
    let listitem = document.createElement("li");
    listitem.textContent = namen;
    arrayNamen.appendChild(listitem);
});

let reversedNamen = Arr.slice().reverse(); 
reversedNamen.forEach(function(namen) {
    let listitem = document.createElement("li");
    listitem.textContent = namen;
    arrayOmgekeerdNamen.appendChild(listitem);
});