let arrayEen = [1,2,3,4,5,6,7,8,9,10];
let arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(){
    let optellijst = document.getElementById("optellijst");
    for (let i = 0; i < arrayEen.length; i++){
        let sum = arrayEen[i] + arrayTwee[i];
        let optellenSum = `${arrayEen[i]} + ${arrayTwee[i]} = ${sum}`;

        let resuCon = document.createElement("p");
        resuCon.textContent = optellenSum;
        optellijst.appendChild(resuCon);

    }

}
optellen();

function aftrekken(){
    let aftrekkenlijst = document.getElementById("aftrekkenlijst");
    for (let i = 0; i < arrayEen.length; i++){
        let sum = arrayTwee[i] - arrayEen[i];
        let optellenSum = `${arrayTwee[i]} - ${arrayEen[i]} = ${sum}`;

        let resuCon = document.createElement("p");
        resuCon.textContent = optellenSum;
        aftrekkenlijst.appendChild(resuCon);

    }
}
aftrekken();

function vermenigvuldigen(){
    let Vlijst = document.getElementById("Vlijst");
    for (let i = 0; i < arrayEen.length; i++){
        let sum = arrayEen[i] * arrayTwee[i];
        let RS = `${arrayEen[i]} * ${arrayTwee[i]} = ${sum}`;

        let resuCon = document.createElement("p");
        resuCon.textContent = RS;
        Vlijst.appendChild(resuCon);

    }
}
vermenigvuldigen();

function delen(){
    let delenlijst = document.getElementById("delenlijst")
    for (let i = 0; i < arrayEen.length; i++){
        let sum = arrayTwee[i] / arrayEen[i];
        let optellenSum = `${arrayTwee[i]} / ${arrayEen[i]} = ${sum}`;

        let resuCon = document.createElement("p");
        resuCon.textContent = optellenSum;
        delenlijst.appendChild(resuCon);

    }
}
delen();