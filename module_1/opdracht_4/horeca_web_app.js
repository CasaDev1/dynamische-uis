const dranken = {
  fris: 2,
  bier: 3,
  wijn: 4,
};
let show = ''
let bestellingen = [];

function bestellingPlaatsen() {
  const bestelling = prompt("Welk drankje wilt u bestellen?").toLowerCase();
  if (!dranken[bestelling]) {
    alert("Sorry, we kennen dit drankje niet.");
    return;
  }
  const hoeveelheid = parseInt(prompt("Hoeveel "+bestelling+" wilt u hebben?"));
  bestellingen.push({ naam: bestelling, hoeveelheid: hoeveelheid, prijs: dranken[bestelling] });
}

function toonRekening() {
  let totaleKosten = 0;
  let factuur = "";
  bestellingen.forEach((bestelling) => {
    totaleKosten += bestelling.hoeveelheid * bestelling.prijs;
    factuur += ""+bestelling.hoeveelheid+" x "+bestelling.naam+" - "+bestelling.hoeveelheid * bestelling.prijs+"<br>";
  });
  factuur += "Totaal: €"+totaleKosten+"";
  return factuur;
}

while (true) {
  const doorgaan = prompt("Wilt u een bestelling plaatsen? Typ 'ja' of 'nee'.").toLowerCase();
  if (doorgaan === "nee") {
    break;
  } else if (doorgaan === "ja") {
    bestellingPlaatsen();
  } else {
    alert("Ongeldige invoer. Typ ja of nee.");
  }
}

console.log(toonRekening())

document.getElementById("show").innerHTML = toonRekening();
