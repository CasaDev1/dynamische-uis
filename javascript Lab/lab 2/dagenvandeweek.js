let dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

let dagenLijst = document.getElementById("dagenLijst");
for (let i = 0; i < dagenVanDeWeek.length; i++) {
    let listitem = document.createElement("li");
    listitem.textContent = dagenVanDeWeek[i];
    dagenLijst.appendChild(listitem);
}

let werkDagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];

let werkDagenlijst = document.getElementById("werkDagenlijst");
for (let i = 0; i < werkDagen.length; i++) {
    let listitem2 = document.createElement("li");
    listitem2.textContent = werkDagen[i];
    werkDagenlijst.appendChild(listitem2);
}

let weekendDagen = ["zaterdag", "zondag"];

let weekendDagenlijst = document.getElementById("weekendDagenlijst");
for (let i = 0; i < weekendDagen.length; i++){
    let listItem3 = document.createElement("li");
    listItem3.textContent = weekendDagen[i];
    weekendDagenlijst.appendChild(listItem3);
}

let omgekeerdeAWD = ["zondag","zaterdag","vrijdag", "donderdag", "woensdag", "dinsdag", "maandag"];

let omgekeerdeAWDlijst = document.getElementById("omgekeerdeV");
for (let i = 0; i < omgekeerdeAWD.length; i++){
    let listItem4 = document.createElement("li");
    listItem4.textContent = omgekeerdeAWD[i];
    omgekeerdeAWDlijst.appendChild(listItem4);
}

let omgekeerdeWD = ["vrijdag", "donderdag", "woensdag", "dinsdag", "maandag"];

let omgekeerdeWDlijst = document.getElementById("omgekeerdeWD");
for (let i = 0; i < omgekeerdeWD.length; i++){
    let listItem5 = document.createElement("li");
    listItem5.textContent = omgekeerdeWD[i];
    omgekeerdeWDlijst.appendChild(listItem5);
}


let omgekeerdeWeekend = ["zaterdag", "zondag"];

let omgekeerdeWeekendlijst = document.getElementById("omgekeerdeWeekend");
for (let i = 0; i < omgekeerdeWeekend.length; i++){
    let listItem6 = document.createElement("li");
    listItem6.textContent = omgekeerdeWeekend[i];
    omgekeerdeWeekendlijst.appendChild(listItem6);
}