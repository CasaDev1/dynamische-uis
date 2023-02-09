let vraag_getal = parseInt(prompt("voer een getal in:"));
let tekst = "";


for (let i = 1; i <= vraag_getal; i++) {
    for (let w = 1; w <= i; w++) {
        tekst += w + "-";
    }
    tekst = tekst.slice(0, -1);
    tekst += "<br>";
}



for (let i = vraag_getal - 1; i >= 1; i--) {
    for (let w = 1; w <= i; w++) {
        tekst += w + "-";
    }
    tekst = tekst.slice(0, -1);
    tekst += "<br>";
}



document.getElementById("tekst").innerHTML = tekst