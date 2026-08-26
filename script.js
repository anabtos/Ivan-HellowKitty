/* =================================
   ELEMENTOS
================================= */

const themeButton = document.getElementById("themeButton");
const surpriseButton = document.getElementById("surpriseButton");
const heartsContainer = document.getElementById("hearts-container");

const modal = document.getElementById("modal");
const modalEmoji = document.getElementById("modalEmoji");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");


/* =================================
   MODO ESCURO
================================= */

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});


/* =================================
   CORAÇÕES
================================= */

function createHeart() {

    const heart = document.createElement("div");

    const hearts = [
        "💗",
        "💖",
        "💕",
        "💓",
        "💞",
        "🎀",
        "♡"
    ];

    heart.classList.add("heart");

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}


/* Cria corações automaticamente */

setInterval(createHeart, 800);


/* =================================
   SURPRESA
================================= */

surpriseButton.addEventListener("click", () => {

    createManyHearts();

    showModal(
        "🎀",
        "Surpresa!",
        "Você acaba de desbloquear uma chuva de fofura! 💗✨"
    );

});


/* =================================
   MUITOS CORAÇÕES
================================= */

function createManyHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}


/* =================================
   MODAL
================================= */

function showModal(emoji, title, text) {

    modalEmoji.innerHTML = emoji;

    modalTitle.innerHTML = title;

    modalText.innerHTML = text;

    modal.classList.add("active");

}


function closeModal() {

    modal.classList.remove("active");

}


/* Fechar clicando fora */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


/* =================================
   PERSONAGENS
================================= */

function characterMessage(character) {

    const messages = {

        "Hello Kitty":
            "A Hello Kitty é conhecida por sua personalidade amigável, carinhosa e por seu famoso laço vermelho! 🎀",

        "My Melody":
            "My Melody é uma coelhinha muito doce que adora seus amigos e usa seu famoso capuz! 🐰",

        "Kuromi":
            "Kuromi tem uma personalidade mais travessa e adora se divertir. 😈🖤",

        "Cinnamoroll":
            "Cinnamoroll é um cachorrinho de orelhas enormes que consegue voar! ☁️🐶"

    };

    const emojis = {

        "Hello Kitty": "🎀",

        "My Melody": "🐰",

        "Kuromi": "😈",

        "Cinnamoroll": "☁️"

    };

    showModal(
        emojis[character],
        character,
        messages[character]
    );

}


/* =================================
   GALERIA
================================= */

function galleryMessage(message) {

    showModal(
        "💗",
        "Momento fofo!",
        message
    );

}


/* =================================
   CARTINHA
================================= */

function openLetter() {

    const letter = document.getElementById("letterText");

    letter.innerHTML =
        "Você é uma pessoa muito especial! Nunca se esqueça de espalhar gentileza, sorrir para as pequenas coisas e acreditar nos seus sonhos. 🎀💗✨";

    createManyHearts();

}


/* =================================
   FRASES
================================= */

const quotes = [

    "Espalhe amor, gentileza e fofura por onde passar. 🎀",

    "Pequenos momentos podem guardar os maiores sentimentos. 💗",

    "Nunca deixe de acreditar na magia das coisas simples. ✨",

    "Um pouco de carinho pode transformar completamente o dia de alguém. 🌸",

    "Sorria, seja gentil e continue sendo você mesma. 💕",

    "A vida fica mais bonita quando compartilhamos amor. 🎀",

    "Que nunca faltem sonhos, amigos e muitos momentos felizes. 🌷"

];


function newQuote() {

    const quoteText =
        document.getElementById("quoteText");

    const random =
        Math.floor(Math.random() * quotes.length);

    quoteText.style.opacity = "0";

    setTimeout(() => {

        quoteText.innerHTML =
            quotes[random];

        quoteText.style.opacity = "1";

    }, 200);

}


/* =================================
   ANIMAÇÃO DA FRASE
================================= */

document
    .getElementById("quoteText")
    .style.transition = "opacity 0.2s";


/* =================================
   CLIQUE EM QUALQUER PARTE
   GERA UM PEQUENO CORAÇÃO
================================= */

document.addEventListener("click", (event) => {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.tagName === "A"
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";

    heart.style.left = event.clientX + "px";

    heart.style.top = event.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "5000";

    heart.style.fontSize = "20px";

    heart.style.transition =
        "all 1s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            "translateY(-80px) scale(1.5)";

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 1100);

});