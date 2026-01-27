const frases = [
    "This is HALCONZ",
    "HALCONZ: We frag first, ask later",
    "HALCONZ: lag? Never heard of it",
    "High score? Obvious",
    "HALCONZ ALWAYS IN TOP",
    "AFK?",
    "Pain no Gain",
    "No noobs allowed",
    "Campers fear HALCONZ players",
    "Unlocking legendary status...",
    "GG? Nah, HALCONZ only W’s",
    "The raid never ends",
    "RAGE?",
    "Level up, fly high, HALCONZ",
    "Epic loot, epic squad",
    "Rage quit? Not in HALCONZ",
    "We hate Toxicity",
    "Own the map, own the game",
    "We dominate any game",
    "If you don't trust i'll show you"
]

//elige una frase aleatoria
const randomIndex = Math.floor(Math.random() * frases.length);
const fraseSeleccionada = frases[randomIndex];

//pone la frase en el loader
const loaderText = document.getElementById("loader-text");
loaderText.textContent = fraseSeleccionada;