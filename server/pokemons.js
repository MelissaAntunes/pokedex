var express = require('express');
var http = require('http');
var app = express();

var pokemons = [
  {
    "image" : "img/1.png",
    "id": "001",
    "name": "Bulbasaur",
    "species": "Seed Pokémon",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71m",
    "weight": "6.9 kg",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "sp.atk": 65,
      "sp.def": 65,
      "speed": 45,
      "total": 318
    },
    "evolution": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur"
    ]
  },
  {
    "image" : "img/2.png",
    "id": "002",
    "name": "Ivysaur",
    "species": "Seed Pokémon",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99m",
    "weight": "13.0 kg",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "sp.atk": 80,
      "sp.def": 80,
      "speed": 60,
      "total": 405
    },
    "evolution": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur"
    ]
  },
  {
    "image" : "img/3.png",
    "id": "003",
    "name": "Venusaur",
    "species": "Seed Pokémon",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01m",
    "weight": "100.0 kg",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "sp.atk": 100,
      "sp.def": 100,
      "speed": 80,
      "total": 525
    },
    "evolution": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur"
    ]
  },
  {
    "image" : "img/4.png",
    "id": "004",
    "name": "Charmander",
    "species": "Lizard Pokémon",
    "type": [
      "Fire"
    ],
    "height": "0.61m",
    "weight": "8.5 kg",
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "sp.atk": 60,
      "sp.def": 50,
      "speed": 65,
      "total": 309
    },
    "evolution": [
      "Charmander",
      "Charmeleon",
      "Charizard"
    ]
  },
  {
    "image" : "img/5.png",
    "id": "005",
    "name": "Charmeleon",
    "species": "Flame Pokémon",
    "type": [
      "Fire"
    ],
    "height": "1.09m",
    "weight": "19.0 kg",
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "sp.atk": 80,
      "sp.def": 65,
      "speed": 80,
      "total": 405
    },
    "evolution": [
      "Charmander",
      "Charmeleon",
      "Charizard"
    ]
  },
  {
    "image" : "img/6.png",
    "id": "006",
    "name": "Charizard",
    "species": "Flame Pokémon",
    "type": [
      "Fire",
      "Flying"
    ],
    "height": "1.70m",
    "weight": "90.5 kg",
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "sp.atk": 109,
      "sp.def": 85,
      "speed": 100,
      "total": 534
    },
    "evolution": [
      "Charmander",
      "Charmeleon",
      "Charizard"
    ]
  },
  {
    "image" : "img/7.png",
    "id": "007",
    "name": "Squirtle",
    "species": "Tiny Turtle Pokémon",
    "type": [
      "Water"
    ],
    "height": "0.51m",
    "weight": "9.0 kg",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "sp.atk": 50,
      "sp.def": 64,
      "speed": 43,
      "total": 314
    },
    "evolution": [
      "Squirtle",
      "Wartortle",
      "Blastoise"
    ]
  },
{
    "image" : "img/8.png",
    "id": "008",
    "name": "Wartortle",
    "species": "Turtle Pokémon",
    "type": [
      "Water"
    ],
    "height": "0.99m",
    "weight": "22.5 kg",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "sp.atk": 65,
      "sp.def": 80,
      "speed": 58,
      "total": 405
    },
    "evolution": [
      "Squirtle",
      "Wartortle",
      "Blastoise"
    ]
  },
{
  "image" : "img/9.png",
  "id": "009",
  "name": "Blastoise",
  "species": "Shellfish Pokémon",
  "type": [
    "Water"
  ],
  "height": "1.60m",
  "weight": "188.5 lbs (85.5 kg)",
  "abilities": [
    "Torrent",
    "Rain Dish"
  ],
  "stats": {
    "hp": 79,
    "attack": 83,
    "defense": 100,
    "sp.atk": 85,
    "sp.def": 105,
    "speed": 78,
    "total": 530
  },
  "evolution": [
    "Squirtle",
    "Wartortle",
    "Blastoise"
  ]
},
{
  "image" : "img/10.png",
  "id": "010",
  "name": "Caterpie",
  "species": "Worm Pokémon",
  "type": [
    "Bug"
  ],
  "height": "0.30m",
  "weight": "2.9 kg",
  "abilities": [
    "Shield Dust",
    "Run Away"
  ],
  "stats": {
    "hp": 45,
    "attack": 30,
    "defense": 35,
    "sp.atk": 20,
    "sp.def": 20,
    "speed": 45,
    "total": 195
  },
  "evolution": [
    "Caterpie",
    "Metapod",
    "Butterfree"
  ]
},
{
  "image" : "img/11.png",
  "id": "011",
  "name": "Metapod",
  "species": "Cocoon Pokémon",
  "type": [
    "Bug"
  ],
  "height": "0.71m",
  "weight": "9.9 kg",
  "abilities": [
    "Shed Skin"
  ],
  "stats": {
    "hp": 50,
    "attack": 20,
    "defense": 55,
    "sp.atk": 25,
    "sp.def": 25,
    "speed": 30,
    "total": 205
  },
  "evolution": [
    "Caterpie",
    "Metapod",
    "Butterfree"
  ]
},
{
  "image" : "img/12.png",
  "id": "012",
  "name": "Butterfree",
  "species": "Butterfly Pokémon",
  "type": [
    "Bug",
    "Flying"
  ],
  "height": "1.09m",
  "weight": "32.0 kg",
  "abilities": [
    "Compound Eyes",
    "Tinted Lens"
  ],
  "stats": {
    "hp": 60,
    "attack": 45,
    "defense": 50,
    "sp.atk": 90,
    "sp.def": 80,
    "speed": 70,
    "total": 395
  },
  "evolution": [
    "Caterpie",
    "Metapod",
    "Butterfree"
  ]
},
{
  "image" : "img/13.png",
  "id": "013",
  "name": "Weedle",
  "species": "Hairy Bug Pokémon",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.30m",
  "weight": "3.2 kg",
  "abilities": [
    "Shield Dust",
    "Run Away"
  ],
  "stats": {
    "hp": 40,
    "attack": 35,
    "defense": 30,
    "sp.atk": 20,
    "sp.def": 20,
    "speed": 50,
    "total": 195
  },
  "evolution": [
    "Weedle",
    "Kakuna",
    "Beedrill"
  ]
},
{
  "image" : "img/14.png",
  "id": "014",
  "name": "Kakuna",
  "species": "Cocoon Pokémon",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.61m",
  "weight": "10.0 kg",
  "abilities": [
    "Shed Skin"
  ],
  "stats": {
    "hp": 45,
    "attack": 25,
    "defense": 50,
    "sp.atk": 25,
    "sp.def": 25,
    "speed": 35,
    "total": 205
  },
  "evolution": [
    "Weedle",
    "Kakuna",
    "Beedrill"
  ]
},
{
  "image" : "img/15.png",
  "id": "015",
  "name": "Beedrill",
  "species": "Poison Bee Pokémon",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.99m",
  "weight": "29.5 kg",
  "abilities": [
    "Swarm",
    "Sniper"
  ],
  "stats": {
    "hp": 65,
    "attack": 90,
    "defense": 40,
    "sp.atk": 45,
    "sp.def": 80,
    "speed": 75,
    "total": 395
  },
  "evolution": [
    "Weedle",
    "Kakuna",
    "Beedrill"
  ]
},
{
  "image" : "img/16.png",
  "id": "016",
  "name": "Pidgey",
  "species": "Tiny Bird Pokémon",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "0.30m",
  "weight": "1.8 kg",
  "abilities": [
    "Keen Eye",
    "Tangled Feet",
    "Big Pecks"
  ],
  "stats": {
    "hp": 40,
    "attack": 45,
    "defense": 40,
    "sp.atk": 35,
    "sp.def": 35,
    "speed": 56,
    "total": 251
  },
  "evolution": [
    "Pidgey",
    "Pidgeotto",
    "Pidgeot"
  ]
},
{
  "image" : "img/17.png",
  "id": "017",
  "name": "Pidgeotto",
  "species": "Bird Pokémon",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "1.09m",
  "weight": "30.0 kg",
  "abilities": [
    "Keen Eye",
    "Tangled Feet",
    "Big Pecks"
  ],
  "stats": {
    "hp": 63,
    "attack": 60,
    "defense": 55,
    "sp.atk": 50,
    "sp.def": 50,
    "speed": 71,
    "total": 349
  },
  "evolution": [
    "Pidgey",
    "Pidgeotto",
    "Pidgeot"
  ]
},
{
  "image" : "img/18.png",
  "id": "018",
  "name": "Pidgeot",
  "species": "Bird Pokémon",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "1.50m",
  "weight": "39.5 kg",
  "abilities": [
    "Keen Eye",
    "Tangled Feet",
    "Big Pecks"
  ],
  "stats": {
    "hp": 83,
    "attack": 80,
    "defense": 75,
    "sp.atk": 70,
    "sp.def": 70,
    "speed": 101,
    "total": 479
  },
  "evolution": [
    "Pidgey",
    "Pidgeotto",
    "Pidgeot"
  ]
},
{
  "image" : "img/19.png",
  "id": "019",
  "name": "Rattata",
  "species": "Mouse Pokémon",
  "type": [
    "Normal"
  ],
  "height": "0.30m",
  "weight": "3.5 kg",
  "abilities": [
    "Guts",
    "Run Away",
    "Hustle"
  ],
  "stats": {
    "hp": 30,
    "attack": 56,
    "defense": 35,
    "sp.atk": 25,
    "sp.def": 35,
    "speed": 72,
    "total": 253
  },
  "evolution": [
    "Rattata",
    "Raticate"
  ]
},
{
  "image" : "img/20.png",
  "id": "020",
  "name": "Raticate",
  "species": "Mouse Pokémon",
  "type": [
    "Normal"
  ],
  "height": "0.71m",
  "weight": "18.5 kg",
  "abilities": [
    "Guts",
    "Run Away",
    "Hustle"
  ],
  "stats": {
    "hp": 55,
    "attack": 81,
    "defense": 60,
    "sp.atk": 50,
    "sp.def": 70,
    "speed": 97,
    "total": 413
  },
  "evolution": [
    "Rattata",
    "Raticate"
  
  ]
},
{
  "image" : "img/21.png",
  "id": "021",
  "name": "Spearow",
  "species": "Tiny Bird Pokémon",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "0.30m",
  "weight": "2.0 kg",
  "abilities": [
    "Keen Eye",
    "Sniper"
  ],
  "stats": {
    "hp": 40,
    "attack": 60,
    "defense": 30,
    "sp.atk": 31,
    "sp.def": 31,
    "speed": 70,
    "total": 262
  },
  "evolution": [
    "Spearow",
    "Fearow"
  ]
},
{
  "image" : "img/22.png",
  "id": "022",
  "name": "Fearow",
  "species": "Beak Pokémon",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "1.19m",
  "weight": "38.0 kg",
  "abilities": [
    "Keen Eye",
    "Sniper"
  ],
  "stats": {
    "hp": 65,
    "attack": 90,
    "defense": 65,
    "sp.atk": 61,
    "sp.def": 61,
    "speed": 100,
    "total": 442
  },
  "evolution": [
    "Spearow",
    "Fearow"
  ]
},
{
  "image" : "img/23.png",
  "id": "023",
  "name": "Ekans",
  "species": "Snake Pokémon",
  "type": [
    "Poison"
  ],
  "height": "2.01m",
  "weight": "6.9 kg",
  "abilities": [
    "Intimidate",
    "Shed Skin",
    "Unnerve"
  ],
  "stats": {
    "hp": 35,
    "attack": 60,
    "defense": 44,
    "sp.atk": 40,
    "sp.def": 54,
    "speed": 55,
    "total": 288
  },
  "evolution": [
    "Ekans",
    "Arbok"
  ]
},
{
  "image" : "img/24.png",
  "id": "024",
  "name": "Arbok",
  "species": "Cobra Pokémon",
  "type": [
    "Poison"
  ],
  "height": "3.51m",
  "weight": "65.0 kg",
  "abilities": [
    "Intimidate",
    "Shed Skin",
    "Unnerve"
  ],
  "stats": {
    "hp": 60,
    "attack": 85,
    "defense": 69,
    "sp.atk": 65,
    "sp.def": 79,
    "speed": 80,
    "total": 438
  },
  "evolution": [
    "Ekans",
    "Arbok"
  ]
},
{
  "image" : "img/25.png",
  "id": "025",
  "name": "Pikachu",
  "species": "Mouse Pokémon",
  "type": [
    "Electric"
  ],
  "height": "0.41m",
  "weight": "6.0 kg",
  "abilities": [
    "Static",
    "Lightning Rod"
  ],
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "sp.atk": 50,
    "sp.def": 50,
    "speed": 90,
    "total": 320
  },
  "evolution": [
    "Pikachu",
    "Raichu"
  ]
},
{
  "image" : "img/26.png",
  "id": "026",
  "name": "Raichu",
  "species": "Mouse Pokémon",
  "type": [
    "Electric"
  ],
  "height": "0.79m",
  "weight": "30.0 kg",
  "abilities": [
    "Static",
    "Lightning Rod"
  ],
  "stats": {
    "hp": 60,
    "attack": 90,
    "defense": 55,
    "sp.atk": 90,
    "sp.def": 80,
    "speed": 110,
    "total": 485
  },
  "evolution": [
    "Pikachu",
    "Raichu"
  ]
},
{
  "image" : "img/27.png",
  "id": "027",
  "name": "Sandshrew",
  "species": "Mouse Pokémon",
  "type": [
    "Ground"
  ],
  "height": "0.61m",
  "weight": "12.0 kg",
  "abilities": [
    "Sand Veil",
    "Sand Rush"
  ],
  "stats": {
    "hp": 50,
    "attack": 75,
    "defense": 85,
    "sp.atk": 20,
    "sp.def": 30,
    "speed": 40,
    "total": 300
  },
  "evolution": [
    "Sandshrew",
    "Sandslash"
  ]
},
{
  "image" : "img/28.png",
  "id": "028",
  "name": "Sandslash",
  "species": "Mouse Pokémon",
  "type": [
    "Ground"
  ],
  "height": "0.99m",
  "weight": "29.5 kg",
  "abilities": [
    "Sand Veil",
    "Sand Rush"
  ],
  "stats": {
    "hp": 75,
    "attack": 100,
    "defense": 110,
    "sp.atk": 45,
    "sp.def": 55,
    "speed": 65,
    "total": 450
  },
  "evolution": [
    "Sandshrew",
    "Sandslash"
  ]
},
{
  "image" : "img/29.png",
  "id": "029",
  "name": "Nidoran♀",
  "species": "Poison Pin Pokémon",
  "type": [
    "Poison"
  ],
  "height": "0.41m",
  "weight": "7.0 kg",
  "abilities": [
    "Poison Point",
    "Rivalry",
    "Hustle"
  ],
  "stats": {
    "hp": 55,
    "attack": 47,
    "defense": 52,
    "sp.atk": 40,
    "sp.def": 40,
    "speed": 41,
    "total": 275
  },
  "evolution": [
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen"
  ]
},
{
  "image" : "img/30.png",
  "id": "030",
  "name": "Nidorina",
  "species": "Poison Pin Pokémon",
  "type": [
    "Poison"
  ],
  "height": "0.79m",
  "weight": "20.0 kg",
  "abilities": [
    "Poison Point",
    "Rivalry",
    "Hustle"
  ],
  "stats": {
    "hp": 70,
    "attack": 62,
    "defense": 67,
    "sp.atk": 55,
    "sp.def": 55,
    "speed": 56,
    "total": 365
  },
  "evolution": [
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen"
  ]
},
{
  "image" : "img/31.png",
  "id": "031",
  "name": "Nidoqueen",
  "species": "Drill Pokémon",
  "type": [
    "Poison",
    "Ground"
  ],
  "height": "1.30m",
  "weight": "60.0 kg",
  "abilities": [
    "Poison Point",
    "Rivalry",
    "Sheer Force"
  ],
  "stats": {
    "hp": 90,
    "attack": 92,
    "defense": 87,
    "sp.atk": 75,
    "sp.def": 85,
    "speed": 76,
    "total": 505
  },
  "evolution": [
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen"
  ]
},
{
  "image" : "img/32.png",
  "id": "032",
  "name": "Nidoran♂",
  "species": "Poison Pin Pokémon",
  "type": [
    "Poison"
  ],
  "height": "0.51m",
  "weight": "9.0 kg",
  "abilities": [
    "Poison Point",
    "Rivalry",
    "Hustle"
  ],
  "stats": {
    "hp": 46,
    "attack": 57,
    "defense": 40,
    "sp.atk": 40,
    "sp.def": 40,
    "speed": 50,
    "total": 273
  },
  "evolution": [
    "Nidoran♂",
    "Nidorino",
    "Nidoking"
  ]
},
{
  "image" : "img/33.png",
  "id": "033",
  "name": "Nidorino",
  "species": "Poison Pin Pokémon",
  "type": [
    "Poison"
  ],
  "height": "0.89m",
  "weight": "19.5 kg",
  "abilities": [
    "Poison Point",
    "Rivalry",
    "Hustle"
  ],
  "stats": {
    "hp": 61,
    "attack": 72,
    "defense": 57,
    "sp.atk": 55,
    "sp.def": 55,
    "speed": 65,
    "total": 365
  },
  "evolution": [
    "Nidoran♂",
    "Nidorino",
    "Nidoking"
  ]
},
{
  "image" : "img/34.png",
  "id": "034",
  "name": "Nidoking",
  "species": "Drill Pokémon",
  "type": [
    "Poison",
    "Ground"
  ],
  "height": "1.40m",
  "weight": "62.0 kg",
  "abilities": [
    "Poison Point",
    "Rivalry",
    "Sheer Force"
  ],
  "stats": {
    "hp": 81,
    "attack": 102,
    "defense": 77,
    "sp.atk": 85,
    "sp.def": 75,
    "speed": 85,
    "total": 505
  },
  "evolution": [
    "Nidoran♂",
    "Nidorino",
    "Nidoking"
  ]
},
{
  "image" : "img/35.png",
  "id": "035",
  "name": "Clefairy",
  "species": "Fairy Pokémon",
  "type": [
    "Fairy"
  ],
  "height": "0.61m",
  "weight": "7.5 kg",
  "abilities": [
    "Cute Charm",
    "Magic Guard",
    "Friend Guard"
  ],
  "stats": {
    "hp": 70,
    "attack": 45,
    "defense": 48,
    "sp.atk": 60,
    "sp.def": 65,
    "speed": 35,
    "total": 323
  },
  "evolution": [
    "Cleffa",
    "Clefairy",
    "Clefable"
  ]
},
{
  "image" : "img/36.png",
  "id": "036",
  "name": "Clefable",
  "species": "Fairy Pokémon",
  "type": [
    "Fairy"
  ],
  "height": "1.30m",
  "weight": "40.0 kg",
  "abilities": [
    "Cute Charm",
    "Magic Guard",
    "Unaware"
  ],
  "stats": {
    "hp": 95,
    "attack": 70,
    "defense": 73,
    "sp.atk": 95,
    "sp.def": 90,
    "speed": 60,
    "total": 483
  },
  "evolution": [
    "Cleffa",
    "Clefairy",
    "Clefable"
  ]
},
{
  "image" : "img/37.png",
  "id": "037",
  "name": "Vulpix",
  "species": "Fox Pokémon",
  "type": [
    "Fire"
  ],
  "height": "0.61m",
  "weight": "9.9 kg",
  "abilities": [
    "Flash Fire",
    "Drought"
  ],
  "stats": {
    "hp": 38,
    "attack": 41,
    "defense": 40,
    "sp.atk": 50,
    "sp.def": 65,
    "speed": 65,
    "total": 299
  },
  "evolution": [
    "Vulpix",
    "Ninetales"
  ]
},
{
  "image" : "img/38.png",
  "id": "038",
  "name": "Ninetales",
  "species": "Fox Pokémon",
  "type": [
    "Fire"
  ],
  "height": "1.09m",
  "weight": "19.9 kg",
  "abilities": [
    "Flash Fire",
    "Drought"
  ],
  "stats": {
    "hp": 73,
    "attack": 76,
    "defense": 75,
    "sp.atk": 81,
    "sp.def": 100,
    "speed": 100,
    "total": 505
  },
  "evolution": [
    "Vulpix",
    "Ninetales"
  ]
},
{
  "image" : "img/39.png",
  "id": "039",
  "name": "Jigglypuff",
  "species": "Balloon Pokémon",
  "type": [
    "Normal",
    "Fairy"
  ],
  "height": "0.51m",
  "weight": "5.5 kg",
  "abilities": [
    "Competitive",
    "Cute Charm",
    "Friend Guard"
  ],
  "stats": {
    "hp": 115,
    "attack": 45,
    "defense": 20,
    "sp.atk": 45,
    "sp.def": 25,
    "speed": 20,
    "total": 270
  },
  "evolution": [
    "Jigglypuff",
    "Wigglytuff"
  ]
},
{
  "image" : "img/40.png",
  "id": "040",
  "name": "Wigglytuff",
  "species": "Balloon Pokémon",
  "type": [
    "Normal",
    "Fairy"
  ],
  "height": "0.99m",
  "weight": "12.0 kg",
  "abilities": [
    "Competitive",
    "Cute Charm",
    "Frisk"
  ],
  "stats": {
    "hp": 140,
    "attack": 70,
    "defense": 45,
    "sp.atk": 85,
    "sp.def": 50,
    "speed": 45,
    "total": 435
  },
  "evolution": [
    "Jigglypuff",
    "Wigglytuff"
  ]
},
{
  "image" : "img/41.png",
  "id": "041",
  "name": "Zubat",
  "species": "Bat Pokémon",
  "type": [
    "Poison",
    "Flying"
  ],
  "height": "0.79m",
  "weight": "7.5 kg",
  "abilities": [
    "Inner Focus",
    "Infiltrator"
  ],
  "stats": {
    "hp": 40,
    "attack": 45,
    "defense": 35,
    "sp.atk": 30,
    "sp.def": 40,
    "speed": 55,
    "total": 245
  },
  "evolution": [
    "Zubat",
    "Golbat",
    "Crobat"
  ]
},
{
  "image" : "img/42.png",
  "id": "042",
  "name": "Golbat",
  "species": "Bat Pokémon",
  "type": [
    "Poison",
    "Flying"
  ],
  "height": "1.60m",
  "weight": "55.0 kg",
  "abilities": [
    "Inner Focus",
    "Infiltrator"
  ],
  "stats": {
    "hp": 75,
    "attack": 80,
    "defense": 70,
    "sp.atk": 65,
    "sp.def": 75,
    "speed": 90,
    "total": 455
  },
  "evolution": [
    "Zubat",
    "Golbat",
    "Crobat"
  ]
},
{
  "image" : "img/43.png",
  "id": "043",
  "name": "Oddish",
  "species": "Weed Pokémon",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.51m",
  "weight": "5.4 kg",
  "abilities": [
    "Chlorophyll",
    "Run Away"
  ],
  "stats": {
    "hp": 45,
    "attack": 50,
    "defense": 55,
    "sp.atk": 75,
    "sp.def": 65,
    "speed": 30,
    "total": 320
  },
  "evolution": [
    "Oddish",
    "Gloom",
    "Vileplume"
  ]
},
{
  "image" : "img/44.png",
  "id": "044",
  "name": "Gloom",
  "species": "Weed Pokémon",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.79m",
  "weight": "8.6 kg",
  "abilities": [
    "Chlorophyll",
    "Stench"
  ],
  "stats": {
    "hp": 60,
    "attack": 65,
    "defense": 70,
    "sp.atk": 85,
    "sp.def": 75,
    "speed": 40,
    "total": 395
  },
  "evolution": [
    "Oddish",
    "Gloom",
    "Vileplume"
  ]
},
{
  "image" : "img/45.png",
  "id": "045",
  "name": "Vileplume",
  "species": "Flower Pokémon",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "1.19m",
  "weight": "18.6 kg",
  "abilities": [
    "Chlorophyll",
    "Effect Spore"
  ],
  "stats": {
    "hp": 75,
    "attack": 80,
    "defense": 85,
    "sp.atk": 110,
    "sp.def": 90,
    "speed": 50,
    "total": 490
  },
  "evolution": [
    "Oddish",
    "Gloom",
    "Vileplume"
  ]
},
{
  "image" : "img/46.png",
  "id": "046",
  "name": "Paras",
  "species": "Mushroom Pokémon",
  "type": [
    "Bug",
    "Grass"
  ],
  "height": "0.30m",
  "weight": "5.4 kg",
  "abilities": [
    "Dry Skin",
    "Effect Spore",
    "Damp"
  ],
  "stats": {
    "hp": 35,
    "attack": 70,
    "defense": 55,
    "sp.atk": 45,
    "sp.def": 55,
    "speed": 25,
    "total": 285
  },
  "evolution": [
    "Paras",
    "Parasect"
  ]
},
{
  "image" : "img/47.png",
  "id": "047",
  "name": "Parasect",
  "species": "Mushroom Pokémon",
  "type": [
    "Bug",
    "Grass"
  ],
  "height": "0.99m",
  "weight": "29.5 kg",
  "abilities": [
    "Dry Skin",
    "Effect Spore",
    "Damp"
  ],
  "stats": {
    "hp": 60,
    "attack": 95,
    "defense": 80,
    "sp.atk": 60,
    "sp.def": 80,
    "speed": 30,
    "total": 405
  },
  "evolution": [
    "Paras",
    "Parasect"
  ]
},
{
  "image" : "img/48.png",
  "id": "048",
  "name": "Venonat",
  "species": "Insect Pokémon",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.99m",
  "weight": "30.0 kg",
  "abilities": [
    "Compound Eyes",
    "Tinted Lens",
    "Run Away"
  ],
  "stats": {
    "hp": 60,
    "attack": 55,
    "defense": 50,
    "sp.atk": 40,
    "sp.def": 55,
    "speed": 45,
    "total": 305
  },
  "evolution": [
    "Venonat",
    "Venomoth"
  ]
},
{
  "image" : "img/49.png",
  "id": "049",
  "name": "Venomoth",
  "species": "Poison Moth Pokémon",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "1.50m",
  "weight": "12.5 kg",
  "abilities": [
    "Shield Dust",
    "Tinted Lens",
    "Wonder Skin"
  ],
  "stats": {
    "hp": 70,
    "attack": 65,
    "defense": 60,
    "sp.atk": 90,
    "sp.def": 75,
    "speed": 90,
    "total": 450
  },
  "evolution": [
    "Venonat",
    "Venomoth"
  ]
},
{
  "image" : "img/50.png",
  "id": "050",
  "name": "Diglett",
  "species": "Mole Pokémon",
  "type": [
    "Ground"
  ],
  "height": "0.20m",
  "weight": "0.8 kg",
  "abilities": [
    "Arena Trap",
    "Sand Veil",
    "Sand Force"
  ],
  "stats": {
    "hp": 10,
    "attack": 55,
    "defense": 25,
    "sp.atk": 35,
    "sp.def": 45,
    "speed": 95,
    "total": 265
  },
  "evolution": [
    "Diglett",
    "Dugtrio"
  ]
},
{
  "image" : "img/51.png",
  "id": "051",
  "name": "Dugtrio",
  "species": "Mole Pokémon",
  "type": [
    "Ground"
  ],
  "height": "0.71m",
  "weight": "33.3 kg",
  "abilities": [
    "Arena Trap",
    "Sand Veil",
    "Sand Force"
  ],
  "stats": {
    "hp": 35,
    "attack": 80,
    "defense": 50,
    "sp.atk": 50,
    "sp.def": 70,
    "speed": 120,
    "total": 405
  },
  "evolution": [
    "Diglett",
    "Dugtrio"
  ]
},
{
  "image" : "img/52.png",
  "id": "052",
  "name": "Meowth",
  "species": "Scratch Cat Pokémon",
  "type": [
    "Normal"
  ],
  "height": "0.41m",
  "weight": "4.2 kg",
  "abilities": [
    "Pickup",
    "Technician",
    "Unnerve"
  ],
  "stats": {
    "hp": 40,
    "attack": 45,
    "defense": 35,
    "sp.atk": 40,
    "sp.def": 40,
    "speed": 90,
    "total": 290
  },
  "evolution": [
    "Meowth",
    "Persian"
  ]
},
{
  "image" : "img/53.png",
  "id": "053",
  "name": "Persian",
  "species": "Classy Cat Pokémon",
  "type": [
    "Normal"
  ],
  "height": "0.99m",
  "weight": "32.0 kg",
  "abilities": [
    "Limber",
    "Technician",
    "Unnerve"
  ],
  "stats": {
    "hp": 65,
    "attack": 70,
    "defense": 60,
    "sp.atk": 65,
    "sp.def": 65,
    "speed": 115,
    "total": 440
  },
  "evolution": [
    "Meowth",
    "Persian"
  ]
},
{
  "image" : "img/54.png",
  "id": "054",
  "name": "Psyduck",
  "species": "Duck Pokémon",
  "type": [
    "Water"
  ],
  "height": "0.79m",
  "weight": "19.6 kg",
  "abilities": [
    "Cloud Nine",
    "Damp",
    "Swift Swim"
  ],
  "stats": {
    "hp": 50,
    "attack": 52,
    "defense": 48,
    "sp.atk": 65,
    "sp.def": 50,
    "speed": 55,
    "total": 320
  },
  "evolution": [
    "Psyduck",
    "Golduck"
  ]
},
{
  "image" : "img/55.png",
  "id": "055",
  "name": "Golduck",
  "species": "Duck Pokémon",
  "type": [
    "Water"
  ],
  "height": "1.70m",
  "weight": "76.6 kg",
  "abilities": [
    "Cloud Nine",
    "Damp",
    "Swift Swim"
  ],
  "stats": {
    "hp": 80,
    "attack": 82,
    "defense": 78,
    "sp.atk": 95,
    "sp.def": 80,
    "speed": 85,
    "total": 500
  },
  "evolution": [
    "Psyduck",
    "Golduck"
  ]
}
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/pokemons', function(req, res) {
  res.json(pokemons);
});

app.get('/pokemons/:id', function(req, res) {
  pokemons.forEach(function (pokemon) {
  	if (pokemon.id == req.params.id) {
  		res.json(pokemon);
  		return;
  	}
  });
  res.status(404).end();
});

app.listen(process.env.PORT || 3000);

