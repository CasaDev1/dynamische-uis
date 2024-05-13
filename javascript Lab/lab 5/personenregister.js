
function showPeopleInfo(data) {
    var container = document.getElementById('personContainer');

    data.forEach(person => {
        var personDiv = document.createElement('div');
        personDiv.className = 'person-info';

        personDiv.innerHTML = `
            <h2>Gegevens van de persoon:</h2>
            <p><strong>Voornaam:</strong> ${person.voornaam}</p>
            <p><strong>Achternaam:</strong> ${person.achternaam}</p>
            <p><strong>Nationaliteit:</strong> ${person.nationaliteit}</p>
            <p><strong>Leeftijd:</strong> ${person.leeftijd}</p>
            <p><strong>Gewicht:</strong> ${person.gewicht}</p>
        `;

        container.appendChild(personDiv);
    });
}

function fetchPeopleData() {
    fetch('opdracht2_bijlage.json')
        .then(response => response.json())
        .then(data => showPeopleInfo(data))
        .catch(error => console.error('Er is een fout opgetreden bij het ophalen van de gegevens:', error));
}

function filterPeopleByAge() {
    var age = document.getElementById('ageInput').valueAsNumber;

    var container = document.getElementById('personContainer');
    container.innerHTML = '';

    fetch('opdracht2_bijlage.json')
        .then(response => response.json())
        .then(data => {
            var filteredData = data.filter(person => person.leeftijd > age);
            showPeopleInfo(filteredData);
        })
        .catch(error => console.error('Er is een fout opgetreden bij het filteren van de gegevens:', error));
}

document.addEventListener('DOMContentLoaded', fetchPeopleData);

document.getElementById('filterButton').addEventListener('click', filterPeopleByAge);