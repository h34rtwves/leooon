const gamesMenu = document.getElementById("games-menu");

const game1 = document.getElementById("game1");

const game2 = document.getElementById("game2");

const playGame1 = document.getElementById("play-game1");

const playGame2 = document.getElementById("play-game2");

const finishButton = document.querySelector(".finish-button");

const dressMusic = document.getElementById("dressMusic");

const backgroundLayer = document.getElementById("default-background");

const closetArea = document.querySelector(".closet-area");

const catArea = document.querySelector(".cat-area");

const dressAgain = document.getElementById("dress-again");

const pantsBtn = document.getElementById("pantsBtn");

const hatsBtn = document.getElementById("hatsBtn");

const topLayer = document.getElementById("top-layer");
const pantsLayer = document.getElementById("pants-layer");
const hatLayer = document.getElementById("hat-layer");

const pants = [
    "imágenes/ropa/pantalon1.png",
    "imágenes/ropa/pantalon2.png",
    "imágenes/ropa/pantalon3.png",
    "imágenes/ropa/pantalon4.png",
    "imágenes/ropa/pantalon5.png",
    "imágenes/ropa/pantalon6.png",
    "imágenes/ropa/pantalon7.png",
    "imágenes/ropa/pantalon8.png",
    "imágenes/ropa/pantalon9.png",

];
const pantsPreview = [

    "imágenes/ropa/pantalon1_preview.png",
    "imágenes/ropa/pantalon2_preview.png",
    "imágenes/ropa/pantalon3_preview.png",
    "imágenes/ropa/pantalon4_preview.png",
    "imágenes/ropa/pantalon5_preview.png",
    "imágenes/ropa/pantalon6_preview.png",
    "imágenes/ropa/pantalon7_preview.png",
    "imágenes/ropa/pantalon8_preview.png",
    "imágenes/ropa/pantalon9_preview.png"

];
const hats = [

    "imágenes/ropa/cabeza1.png",
    "imágenes/ropa/cabeza2.png",
    "imágenes/ropa/cabeza3.png",
    "imágenes/ropa/cabeza4.png",
    "imágenes/ropa/cabeza5.png",
    "imágenes/ropa/cabeza6.png",
    "imágenes/ropa/cabeza7.png",
    "imágenes/ropa/cabeza8.png",
    "imágenes/ropa/cabeza9.png"

];
const hatsPreview = [

    "imágenes/ropa/cabeza1_preview.png",
    "imágenes/ropa/cabeza2_preview.png",
    "imágenes/ropa/cabeza3_preview.png",
    "imágenes/ropa/cabeza4_preview.png",
    "imágenes/ropa/cabeza5_preview.png",
    "imágenes/ropa/cabeza6_preview.png",
    "imágenes/ropa/cabeza7_preview.png",
    "imágenes/ropa/cabeza8_preview.png",
    "imágenes/ropa/cabeza9_preview.png"

];
const tops = [

    "imágenes/ropa/TOP1.png",
    "imágenes/ropa/TOP2.png",
    "imágenes/ropa/TOP3.png",
    "imágenes/ropa/TOP4.png",
    "imágenes/ropa/TOP5.png",
    "imágenes/ropa/TOP6.png",
    "imágenes/ropa/TOP7.png",
    "imágenes/ropa/TOP8.png",
    "imágenes/ropa/TOP9.png"
    

];
const topsPreview = [

    "imágenes/ropa/top1_preview.png",
    "imágenes/ropa/top2_preview.png",
    "imágenes/ropa/top3_preview.png",
    "imágenes/ropa/top4_preview.png",
    "imágenes/ropa/top5_preview.png",
    "imágenes/ropa/top6_preview.png",
    "imágenes/ropa/top7_preview.png",
    "imágenes/ropa/top8_preview.png",
    "imágenes/ropa/top9_preview.png"

];

const topsBtn = document.getElementById("topsBtn");

const itemsGrid = document.getElementById("itemsGrid");

function loadItems(items, category){

    itemsGrid.innerHTML = "";

    for(let i = 0; i < items.length; i++){

        const slot = document.createElement("div");
        slot.className = "item-slot";

      const img = document.createElement("img");
      
      img.className = "clothing-item";
      
      if(category === "tops"){
        img.src = topsPreview[i];
      }
      else if(category === "pants"){
        img.src = pantsPreview[i];
      }
      else if(category === "hats"){
        img.src = hatsPreview[i];
      }
      else{
        img.src = items[i];
      }
    
      
      img.onclick = function(){
        
        if(category === "tops"){
            topLayer.src = items[i];
            topLayer.className = "top-layer top" + (i + 1);
        }
        if(category === "pants"){
            pantsLayer.src = items[i];
            pantsLayer.className = "pants-layer pants" + (i + 1);
        }
        if(category === "hats"){
            hatLayer.src = items[i];
            hatLayer.className = "hat-layer hat" + (i + 1);

}

    }
      
      slot.appendChild(img);
      
      itemsGrid.appendChild(slot);

    }
}

topsBtn.onclick = function(){
    loadItems(tops, "tops");

}
pantsBtn.onclick = function(){

    loadItems(pants, "pants");

}
hatsBtn.onclick = function(){

    loadItems(hats, "hats");

}

loadItems(hats, "hats");


playGame1.onclick = function(){

    gamesMenu.style.display = "none";

    game1.style.display = "block";

    dressMusic.currentTime = 0;
    dressMusic.play();

}
finishButton.onclick = function(){

    closetArea.classList.add("hide-closet");

    catArea.classList.add("expand-cat");

    dressAgain.style.display = "block";

    backgroundLayer.src = "imágenes/fondos/finish.png";

}
dressAgain.onclick = function(){

    closetArea.classList.remove("hide-closet");

    catArea.classList.remove("expand-cat");

    dressAgain.style.display = "none";

    backgroundLayer.src = "imágenes/fondos/room5.png";

    topLayer.src = "";
    
    pantsLayer.src = "";
    
    hatLayer.src = "";

}
playGame2.addEventListener("click", function(){

    resetGame();

    gamesMenu.style.display = "none";

    game2.style.display = "block";

    gameMusic.currentTime = 0;
    gameMusic.play();

});

const exitGame1 = document.getElementById("exit-game1");

const exitGame2 = document.getElementById("exit-game2");

exitGame1.onclick = function(){

    game1.style.display = "none";

    gamesMenu.style.display = "flex";

    dressMusic.pause();
    dressMusic.currentTime = 0;

}

exitGame2.onclick = function(){

    resetGame();

    game2.style.display = "none";

    gamesMenu.style.display = "flex";

    gameMusic.pause();
    gameMusic.currentTime = 0;

}


// elementos del html:P

const startButton = document.getElementById("startButton");
const speech = document.getElementById("speech");
const timer = document.getElementById("timer");
const cat = document.querySelector(".cat");
const hungerFill = document.getElementById("hunger-fill");
const exitButton = document.getElementById("exit-game2");
const foodContainer = document.getElementById("foodContainer");
const clapSound = document.getElementById("clapSound");
const clickSound = document.getElementById("clickSound");
const gameMusic = document.getElementById("gameMusic");

// Comiditas 

const foods = [

    "agua",
    "aguacate",
    "ajo",
    "almendra",
    "arroz",
    "arroz con leche",
    "atún",
    "avellanas",
    "avena",
    "cacahuates",
    "calabaza",
    "camarón",
    "bistec",
    "cebolla",
    "cereza",
    "cerveza",
    "champiñón",
    "chile",
    "cigarro",
    "coco",
    "durazno",
    "elote",
    "ensalada",
    "espagueti",
    "espinaca",
    "flan",
    "fresa",
    "frijoles",
    "galleta",
    "gelatina",
    "gomitas",
    "helado",
    "huevo",
    "jamón",
    "jugo de manzana",
    "leche",
    "lechuga",
    "limón",
    "limonada",
    "mantequilla",
    "manzana",
    "mermelada",
    "miel",
    "naranja",
    "nuez",
    "paleta",
    "palomitas",
    "pan",
    "papa",
    "papas fritas",
    "papitas",
    "pastel",
    "pastel de zanahoria",
    "pepino",
    "pera",
    "pescado",
    "piña",
    "plátano",
    "pollo",
    "puré de papa",
    "queso",
    "refresco",
    "salchicha",
    "sandía",
    "taco",
    "tocino",
    "tomate",
    "uvas",
    "vino",
    "zanahoria",

];

const phrases = [

    "Quiero",
    "Dame",
    "Se me antoja",
    "Tengo ganas de",
    "Quisiera"

];

// variables

let gameStarted = false;
let timeLeft = 120;
let hunger = 0;
let mistakes = 0;
let timerInterval;
let confettiActive = false;
let currentFood;


// eventos

startButton.addEventListener("click", startGame);

//funcioness

function startGame(){

    resetGame();

    gameStarted = true;

    startButton.style.display = "none";

    cat.src = "imágenes/gatos/enojado.png";

    newRequest();

    timerInterval = setInterval(updateTimer,1000);

}

function resetGame(){

    gameStarted = false;

    clearInterval(timerInterval);

    timeLeft = 120;
    timer.textContent = "⏱ 02:00";

    hunger = 0;
    hungerFill.style.width = "0%";

    mistakes = 0;

    cat.src = "imágenes/gatos/normal.png";

    speech.textContent = "Tengo hambre...";

    startButton.style.display = "block";
    startButton.textContent = "▶ START";

    gameOverScreen.style.display = "none";

}

function updateTimer(){

    timeLeft--;

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timer.textContent =
        "⏱ " +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
        
    if(timeLeft <= 0){
        gameOver();
        return;
    }

}
 function newRequest(){

    currentFood = foods[Math.floor(Math.random() * foods.length)];

    let phrase = phrases[Math.floor(Math.random() * phrases.length)];

    let article = getArticle(currentFood);

    speech.innerHTML =
        `${phrase} ${article}&nbsp;<span class="food-word">${currentFood}</span>.`;

    showOptions();

}

function showOptions(){

    foodContainer.innerHTML = "";

    let options = [];

    options.push(currentFood);

    while(options.length < 5){

        let randomFood = foods[Math.floor(Math.random() * foods.length)];

        if(!options.includes(randomFood)){

            options.push(randomFood);

        }

    }

    options.sort(() => Math.random() - 0.5);

    for(let food of options){

        let button = document.createElement("button");

        button.className = "food-button";

        button.innerHTML =
        `<img src="imágenes/comida/${food}.png">`;

        button.onclick = function(){

    if(food === currentFood){

        cat.src = "imágenes/gatos/feliz.png";

        hunger += 10;

        hungerFill.style.width = hunger + "%";

        if(hunger >= 100){
            winGame();
            return;
        }

        setTimeout(function(){
        
        cat.src = "imágenes/gatos/enojado.png";
        
        newRequest();

    },700);

}
else{

        mistakes++;
        
        if(mistakes >= 3){
            gameOver();
            return;
        }
        cat.src = "imágenes/gatos/triste.png";

        hunger -= 10;

        if(hunger < 0){

            hunger = 0;

        }

        hungerFill.style.width = hunger + "%";

        setTimeout(function(){

            cat.src = "imágenes/gatos/enojado.png";

        },700);

    }

}

        foodContainer.appendChild(button);

    }

}

function getArticle(food){

    food = food.toLowerCase();

    if(food.endsWith("as")){
        return "unas";
    }

    if(food.endsWith("os")){
        return "unos";
    }

    if(food.endsWith("a")){
        return "una";
    }

    return "un";

}
function gameOver(){

    clearInterval(timerInterval);

    gameStarted = false;

    cat.src = "imágenes/gatos/muerto.png";

    speech.textContent = "Lo mataste de hambre...";

    foodContainer.innerHTML = "";

    startButton.style.display = "block";

    startButton.textContent = "TRY AGAIN";

    gameOverScreen.style.display = "flex";

    gameMusic.pause();


}
function winGame(){

    clearInterval(timerInterval);

    gameStarted = false;

    cat.src = "imágenes/gatos/feliz.png";

    gameMusic.pause();

    clapSound.play();

    speech.textContent = "¡Gracias por alimentarme!";
   
    foodContainer.innerHTML = "";

    startButton.style.display = "block";

    startButton.textContent = "PLAY AGAIN";

}
function playClick(){

    clickSound.currentTime = 0;

    clickSound.play();
}

