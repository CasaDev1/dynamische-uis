let userInput = parseInt(prompt("Voer een getal in:")); 

let piramideArr = [];
for (let i = 0; i <= userInput; i++) {
    piramideArr.push(i);
}

for (let i = userInput + 1; i >= 0; i--) {
    let resultaatContainer = document.createElement("p");
    resultaatContainer.textContent = piramideArr.slice(0, i).join(" ");
    document.getElementById("container").appendChild(resultaatContainer);

}