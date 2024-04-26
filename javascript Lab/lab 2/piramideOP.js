let userInput = parseInt(prompt("Voer een getal in:")); 

let piramideArr = [];
for (let i = 0; i <= userInput; i++) {
    piramideArr.push(i);
}

for (let i = 0; i <= userInput; i++) {
    let resultaatContainer = document.createElement("p");
    resultaatContainer.textContent = piramideArr.slice(0, i + 1).join(" ");
    document.getElementById("container").appendChild(resultaatContainer);
}