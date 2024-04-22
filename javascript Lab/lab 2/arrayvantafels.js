let tafelArr = [2,4,6,8];

function vermenigvuldigen() {
    tafelArr.forEach(getal => {
        for (let i = 1; i < 11; i++){
            let sum = getal * i;  
            let resultaatString = `${getal} x ${i} = ${sum}`; 
            let divId = "tafel" + getal;
            let Vlijst = document.getElementById(divId);
            let resultaatContainer = document.createElement("p");
            resultaatContainer.textContent = resultaatString;
            Vlijst.appendChild(resultaatContainer);
        }
    });  
}
    
vermenigvuldigen();