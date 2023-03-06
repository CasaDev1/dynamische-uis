console.log("hfuehf")
let naamIngelogd = "";
let loggin = []
function handleLogin(){
    let naam = document.getElementById('InputNaam').value;
    console.log("heb je geklikt")
    if (loggin.includes == (naam)){
        loggin.splice(loggin.indexOf(naam), 1)
        console.log("u bent uitgelogd")
        document.getElementById('melding').innerText = 'U bent uitgelogd: ' + naam;
        
    }
    else {
        loggin.push(naam);
        document.getElementById('melding').innerText = 'U bent ingelogd: ' + naam;
        
        console.log(loggin)
    }
    document.getElementById('InputNaam').value = '';
    console.log(loggin)
}

