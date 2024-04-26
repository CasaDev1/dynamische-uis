const PRIJZEN = {
    Bolletjes: 0.95,
    Hoorntje: 1.25,
    Bakje: 0.75,
    Slagroom: 0.5,
    Sprinkels: 0.3,
    Caramel_Saus: 0.9,
    L: 9.8,
  };
  const BTW = 6;
  const S_PRINT = "Sorry dat is geen optie die we aanbieden...";
  
  let BESTELLINGEN = [];
  
  function getSoortKlant() {
    while (true) {
      let vraag = prompt(
        "Bent u a) een particuliere klant of b) een zakelijke klant? (a of b): "
      ).toLowerCase();
      if (vraag === "a") {
        return "particuliere klant";
      } else if (vraag === "b") {
        return "zakelijke klant";
      } else {
        alert("Sorry, dat snap ik niet...");
      }
    }
  }
  
  function getAantalBolletjes(klant) {
    while (true) {
      try {
        let aantal;
        if (klant === "zakelijke klant") {
          aantal = parseInt(prompt("Hoeveel liter wilt u bestellen? :"));
        } else if (klant === "particuliere klant") {
          aantal = parseInt(prompt("Hoeveel bolletjes wilt u hebben? :"));
        }
        if (aantal > 8) {
          alert(S_PRINT);
        } else {
          return aantal;
        }
      } catch (error) {
        alert("Voer een getal in!");
      }
    }
  }
  
  function getHoorntjeOfBakje(aantalBolletjes) {
    let vraag = "bakje";
    if (aantalBolletjes <= 3 && aantalBolletjes > 0) {
      let c = true;
      while (c) {
        vraag = prompt(
          `Wilt u deze ${aantalBolletjes} bolletjes in een hoorntje of een bakje?: `
        );
        if (vraag === "hoorntje" || vraag === "bakje") {
          c = false;
        } else {
          alert(S_PRINT);
        }
      }
    } else {
      alert(`Dan krijgt u van mij een bakje met ${aantalBolletjes} bolletjes\n`);
    }
    return vraag;
  }
  
  function getToppings() {
    const Toppings_dict = {};
    let Slagroom = 0;
    let Sprinkels = 0;
    let Caramel_Saus = 0;
  
    let T = true;
    while (T) {
      let vraag = prompt(
        "Wat voor topping wilt u:\n A) Geen \n B) Slagroom \n C) Sprinkels \n D) Caramel Saus : "
      ).toLowerCase();
      if (vraag === "a") {
        alert("Geen extra kosten");
        T = false;
      } else if (vraag === "b") {
        Slagroom += 1;
        Toppings_dict["Slagroom"] = Slagroom;
        T = false;
      } else if (vraag === "c") {
        Sprinkels += 1;
        Toppings_dict["Sprinkels"] = Sprinkels;
        T = false;
      } else if (vraag === "d") {
        Caramel_Saus += 1;
        Toppings_dict["Caramel Saus"] = Caramel_Saus;
        T = false;
      } else {
        alert(S_PRINT);
      }
    }
    return Toppings_dict;
  }
  
  function getSmaak(aantalBolletjes, klant) {
    const smakenDict = {};
  
    let Aardbei = 0;
    let Chocolade = 0;
    let Vanille = 0;
  
    for (let i = 0; i < aantalBolletjes; i++) {
      let c = true;
      while (c) {
        let soortIJs;
        if (klant === "zakelijke klant") {
          soortIJs = "liter";
        } else if (klant === "particuliere klant") {
          soortIJs = "bolletje";
        }
        let smaakV = prompt(
          `Welke smaak wilt u voor ${soortIJs} nummer ${
            i + 1
          }? A) Aardbei, C) Chocolade of V) Vanille?`
        ).toLowerCase();
        c = false;
        if (smaakV === "a" || smaakV === "c" || smaakV === "v") {
          if (smaakV === "a") {
            Aardbei += 1;
            smakenDict["Aardbei"] = Aardbei;
          } else if (smaakV === "c") {
            Chocolade += 1;
            smakenDict["Chocolade"] = Chocolade;
          } else if (smaakV === "v") {
            Vanille += 1;
            smakenDict["Vanille"] = Vanille;
          }
        } else {
          alert(S_PRINT);
          i -= 1;
        }
      }
    }
    return smakenDict;
  }
  
  function getIjs(soortK) {
    const ijsDict = {};
  
    const aantalBolletjes = getAantalBolletjes(soortK);
    ijsDict["bolletjes"] = aantalBolletjes;
    ijsDict["smaak"] = getSmaak(aantalBolletjes, soortK);
    if (soortK === "zakelijke klant") {
      ijsDict["keuzen"] = "";
    } else {
      ijsDict["keuzen"] = getHoorntjeOfBakje(aantalBolletjes);
    }
    if (soortK === "zakelijke klant") {
      ijsDict["Toppings"] = {};
    } else {
      ijsDict["Toppings"] = getToppings();
    }
  
    return ijsDict;
  }
  
  function bon(BESTELLING, klantSoort) {
    let totaalBedrag = 0;
    let bakjes = 0;
    let hoorntjes = 0;
    let aantalBolletjes = 0;
    const smakenDict = {};
    const ToppingDict = {};
    let Berekening_keuzen_b = 0;
    let Bereking_keuzen_h = 0;
  
  
    for (let i = 0; i < BESTELLING.length; i++) {
      aantalBolletjes += BESTELLING[i]["bolletjes"];
  
      if (BESTELLING[i]["keuzen"] === "hoorntje") {
        hoorntjes += 1;
      } else if (BESTELLING[i]["keuzen"] === "bakje") {
        bakjes += 1;
      }
  
      const ToppingsV = BESTELLING[i]["Toppings"];
      for (const key in ToppingsV) {
        if (ToppingsV.hasOwnProperty(key)) {
          if (key in ToppingDict) {
            ToppingDict[key] += ToppingsV[key];
          } else {
            ToppingDict[key] = ToppingsV[key];
          }
        }
      }
  
      const smaken = BESTELLING[i]["smaak"];
      for (const k in smaken) {
        if (smaken.hasOwnProperty(k)) {
          if (k in smakenDict) {
            smakenDict[k] += smaken[k];
          } else {
            smakenDict[k] = smaken[k];
          }
        }
      }
  
      const Bereking_bolletjes =
        Math.round(BESTELLING[i]["bolletjes"] * PRIJZEN["Bolletjes"] * 100) / 100;
      Berekening_keuzen_b =
        Math.round(bakjes * PRIJZEN["Bakje"] * 100) / 100;
      Bereking_keuzen_h =
        Math.round(hoorntjes * PRIJZEN["Hoorntje"] * 100) / 100;
      console.log(Berekening_keuzen_b);
  
      totaalBedrag +=
        Bereking_bolletjes + Bereking_keuzen_h + Berekening_keuzen_b;
      
    }
    let receipt = '<pre>------["Papi Gelato"]--------\n';
  
    if (aantalBolletjes > 0) {
      for (const smaak in smakenDict) {
        if (smakenDict.hasOwnProperty(smaak)) {
          if (klantSoort === "zakelijke klant") {
            receipt += `L.${smaak}        ${smakenDict[smaak]} * € ${
              PRIJZEN["L"]
            } = € ${Math.round(smakenDict[smaak] * PRIJZEN["L"] * 100) / 100}\n`;
          } else {
            receipt += `B.${smaak}        ${smakenDict[smaak]} * € ${
              PRIJZEN["Bolletjes"]
            } = € ${
              Math.round(smakenDict[smaak] * PRIJZEN["Bolletjes"] * 100) / 100
            }\n`;
          }
        }
      }
    }
  
    if (hoorntjes > 0) {
      receipt += `Hoorntjes        ${hoorntjes} * € ${PRIJZEN["Hoorntje"]} = € ${Bereking_keuzen_h}\n`;
    }
    if (bakjes > 0) {
      receipt += `Bakjes           ${bakjes} * €${PRIJZEN["Bakje"]} = € ${Berekening_keuzen_b}\n`;
    }
  
    let toppingB = 0;
    if (ToppingDict) {
      for (const k in ToppingDict) {
        if (ToppingDict.hasOwnProperty(k)) {
          toppingB += PRIJZEN[k] * ToppingDict[k];
          if (k === "Caramel Saus" && hoorntjes > 0) {
            receipt += `T.${k}           = € ${toppingB - 0.3}\n`;
          } else {
            receipt += `T.${k}                = € ${toppingB}\n`;
          }
        }
      }
    }
  
    receipt += "                        --------- +\n";
  
    let berekening = 0;
    for (const waarde in smakenDict) {
      berekening += smakenDict[waarde] * PRIJZEN["L"];
    }
    if (klantSoort === "zakelijke klant") {
      receipt += `Totaal bedrag                = € ${berekening}\n`;
      receipt += `BTW:                         = € ${(
        (berekening / 100) *
        BTW
      ).toFixed(2)}\n`;
    } else {
      receipt += `Totaal bedrag                = € ${(
        totaalBedrag + toppingB
      ).toFixed(2)}\n`;
    }
  
    receipt += "Bedankt en tot ziens!\n</pre>";
    return receipt;
  }
  
  let soortKlant = getSoortKlant();
  
  BESTELLINGEN.push(getIjs(soortKlant));
  
  while (true) {
    let vraag = prompt("Wilt u nog meer bestellen? (ja/nee): ");
  
    if (vraag === "nee") {
      console.log("Hier is uw bestelling:");
      let receipt = bon(BESTELLINGEN, soortKlant);
      document.getElementById("bon").innerHTML = receipt; // Voeg de boninhoud toe aan de div
      break;
    } else if (vraag === "ja") {
      BESTELLINGEN.push(getIjs(soortKlant));
      console.log("------------------------------------");
    } else {
      alert("Sorry, dat begrijp ik niet.\n");
    }
  }