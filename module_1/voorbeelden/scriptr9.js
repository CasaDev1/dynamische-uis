let loggedIn = [];

function getGewerktString(datumNew , datumOld){
    let seconden = (datumNew - datumOld) / 1000;
    let minuten = 0;
    if(seconden > 60){
        minuten = Math.floor(seconden/60);

    };
    seconden -= minuten * 60
    return 'gewerkt:' + minuten + ' minuten' + seconden + "seconden.";
}





function getIndexOfElementByName(lijst, naam){
    for(let x = 0; x < lijst.length; x++){
        if (lijst[x]['naam']=== naam){
            return x;
        }
    }
    
    
    return null;
}

function handleLogin(){
    console.log(loggedIn); 
    console.log(Date())
   
    let naam = document.getElementById('inputNaam').value;
    if (naam.length <= 0){
        alert("Voer een naam in!")
        return;
    }
    console.log("U hebt op de button geklikt");
    const positie = getIndexOfElementByName (loggedIn, naam);
    if (positie != null){ 
        const oldDate = loggedIn[positie]['moment']
        const newDate = new Date();
        const tijd = (oldDate - newDate) / 1000
        loggedIn.splice(positie, 1); 
        console.log("U bent uitgelogd");
        document.getElementById('melding').innerText = 'U bent uitgelogd: ' + naam;
        
    } else {
        loggedIn.push({'naam': naam, 'moment' : new Date()}); 
        console.log("U bent ingelogd");
        document.getElementById('melding').innerText = 'U bent ingelogd: ' + naam;
    }
    document.getElementById('inputNaam').value = '';
    console.log(loggedIn);
    // console.log("U bent ingelogd: " + naam);
    // document.getElementById('melding').innerText = 'Gelukt';
    
}

document.getElementById("inlogButton").onclick = handleLogin;