// Spellenarray
const games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
      "title": "Lost Ark",
      "price": 49.99,
      "genre": "Action",
      "rating": 1
  },
  {
      "title": "Grand Theft Auto V",
      "price": 29.99,
      "genre": "FPS",
      "rating": 3
  },
  {
      "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
      "price": 19.99,
      "genre": "FPS",
      "rating": 3
  },
  {
      "title": "Team Fortress 2",
      "price": 0.00,
      "genre": "FPS",
      "rating": 5
  },
  {
      "title": "Rust",
      "price": 39.99,
      "genre": "Action",
      "rating": 5
  },
  {
      "title": "Unturned",
      "price": 0.00,
      "genre": "RPG",
      "rating": 1
  },
  {
      "title": "ELDEN RING",
      "price": 59.99,
      "genre": "RPG",
      "rating": 5
  },
  {
      "title": "ARK: Survival Evolved",
      "price": 10.00,
      "genre": "RPG",
      "rating": 1
  },
  {
      "title": "War Thunder",
      "price": 0.00,
      "genre": "Simulation",
      "rating": 2
  },
  {
    "title": "Sid Meier's Civilization VI",
    "price": 29.99,
    "genre": "Simulation",
    "rating": 3
  },
  {
    "title": "Football Manager 2023",
    "price": 59.99,
    "genre": "Simulation",
    "rating": 3
  },
  {
    "title": "Warframe",
    "price": 0.00,
    "genre": "Looter-shooter",
    "rating": 3
  },
  {
    "title": "EA SPORTS™ FIFA 23",
    "price": 59.99,
    "genre": "Sport",
    "rating": 1
  },
  {
    "title": "Destiny 2",
    "price": 0.00,
    "genre": "FPS",
    "rating": 5
  },
  {
    "title": "Red Dead Redemption 2",
    "price": 59.99,
    "genre": "RPG",
    "rating": 4
  },
  {
    "title": "Tom Clancy's Rainbow Six Siege",
    "price": 19.99,
    "genre": "Simulation",
    "rating": 3
  },
  {
    "title": "The Witcher 3: Wild Hunt",
    "price": 39.99,
    "genre": "RPG",
    "rating": 4
  },
  {
    "title": "Terraria",
    "price": 9.99,
    "genre": "Sandbox",
    "rating": 2
  },
  {
    "title": "Stardew Valley",
    "price": 14.99,
    "genre": "Sandbox",
    "rating": 1
  },
  {
    "title": "Left 4 Dead 2",
    "price": 9.99,
    "genre": "FPS",
    "rating": 4
  },
  {
    "title": "Don't Starve Together",
    "price": 5.09,
    "genre": "RPG",
    "rating": 3
  },
  {
    "title": "MIR4",
    "price": 19.99,
    "genre": "RPG",
    "rating": 3
  },
  {
    "title": "PAYDAY 2",
    "price": 9.99,
    "genre": "Action",
    "rating": 2
  },
  {
    "title": "Path of Exile",
    "price": 0.00,
    "genre": "RPG",
    "rating": 4
  },
  {
    "title": "Project Zomboid",
    "price": 14.99,
    "genre": "Simulation",
    "rating": 4
  },
  {
    "title": "Valheim",
    "price": 19.99,
    "genre": "Sandbox",
    "rating": 5
  },
  {
    "title": "DayZ",
    "price": 44.99,
    "genre": "Simulation",
    "rating": 3
  }
  ];
  
  const addedGames = []; // een lege lijst waar de toegevoegde spellen in komen
  
  // Functie om totaaloverzicht van spellen weer te geven
  function showGameList() {
    document.getElementById("gameList").style.display = "block";
    document.getElementById("cart").style.display = "none";
    document.getElementById("gameList").innerHTML = ""; // Leeg de inhoud om dubbele weergave te voorkomen
    games.forEach((game) => {
      const gameElement = document.createElement("div");
      gameElement.classList.add("game");
      gameElement.innerHTML = `
          <h2>${game.title}</h2>
          <p>Prijs: €${game.price}</p>
          <p>Genre: ${game.genre}</p>
          <p>Rating: ${game.rating}</p>
          <button onclick="addToCart('${game.title}')">Toevoegen aan winkelmandje</button>
        `;
      document.getElementById("gameList").appendChild(gameElement);
    });
  }
  
  // Functie om spel toe te voegen aan winkelmandje
  function addToCart(title) {
    const selectedGame = games.find((game) => game.title === title);
    const gameElement = document.createElement("div");
    gameElement.classList.add("game");
    gameElement.innerHTML = `
        <h2>${selectedGame.title}</h2>
        <p>Prijs: €${selectedGame.price}</p>
        <button onclick="removeFromCart(this)">Verwijderen</button>
      `;
    document.getElementById("cart").appendChild(gameElement);
    addedGames.push(selectedGame); // Voeg het spel toe aan de array met toegevoegde spellen
    displayShoppingCart(calculatePrice()); // roep deze functie aan displayShoppingCart() met de totaalprijs
  }
  
  // functie die de games laat zien
  function showAddedList() {
    document.getElementById("addedList").style.display = "block";
    const addedGamesList = document.getElementById("addedGamesList");
    addedGamesList.innerHTML = ""; // reset vorige content
    addedGames.forEach((game) => {
      const listItem = document.createElement("li");
      listItem.textContent = game.title;
      addedGamesList.appendChild(listItem);
    });
  }
  
  function calculatePrice() {
    let totalPrice = 0.0;
    addedGames.forEach((game) => {
      totalPrice += game.price;
    });
    return totalPrice.toFixed(2); // geeft de totaalprijs terug met 2 decimalen
  }
  
  
  
  function displayShoppingCart(totalPrice) {
    console.log(totalPrice);
    const cartElement = document.getElementById("cart");
    cartElement.style.display = "block";
    document.getElementById("gameList").style.display = "none";
  
    // reset de vorige content
    cartElement.innerHTML = "";
  
    // maakt nieuwe content aan
    const cartContentElement = document.createElement("div");
    cartContentElement.innerHTML = `
        <h2>Winkelmandje</h2>
        <p>Totaalprijs: €${totalPrice}</p>
        <button onclick="showGameList()">Terug naar overzicht</button>
      `;
    cartElement.appendChild(cartContentElement);
  
    // voeg een verwijderknop toe aan elk spel in het winkelmandje
    const selectedGames = document.querySelectorAll("#cart .game");
    selectedGames.forEach((game) => {
      const removeButton = document.createElement("button");
      removeButton.textContent = "Verwijderen";
      removeButton.onclick = function () {
        game.remove(); // Verwijder het spel uit de DOM
        calculatePrice(); // Herbereken de totaalprijs
      };
      game.appendChild(removeButton);
    });
  }
  
  function filterByPrice() {
    const maxPrice = parseFloat(document.getElementById("priceFilter").value);
    const filteredGames = games.filter((game) => game.price < maxPrice);
    displayFilteredGames(filteredGames);
  }
  
  function filterByGenre() {
    const selectedGenre = document.getElementById("genreFilter").value;
    const filteredGames = games.filter((game) => game.genre === selectedGenre);
    displayFilteredGames(filteredGames);
  }
  
  function filterByRating() {
    const minRating = parseFloat(document.getElementById("ratingFilter").value);
    const filteredGames = games.filter((game) => game.rating <= minRating);
    displayFilteredGames(filteredGames);
  }
  
  // Functie om het filtered games weer te geven
  function displayFilteredGames(filteredGames) {
    document.getElementById("gameList").style.display = "block";
    document.getElementById("cart").style.display = "none";
    document.getElementById("gameList").innerHTML = ""; // Leeg de inhoud om dubbele weergave te voorkomen
    filteredGames.forEach((game) => {
      const gameElement = document.createElement("div");
      gameElement.classList.add("game");
      gameElement.innerHTML = `
          <h2>${game.title}</h2>
          <p>Prijs: €${game.price}</p>
          <p>Genre: ${game.genre}</p>
          <p>Rating: ${game.rating}</p>
          <button onclick="addToCart('${game.title}')">Toevoegen aan winkelmandje</button>
        `;
      document.getElementById("gameList").appendChild(gameElement);
    });
  }