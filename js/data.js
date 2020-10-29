// In this file we have some data that the other source files will use.
// Most of this data is stored in constants.
// Constants are just variables that never change. By convention,
// We write constants with upper case letters.

// The GAME_WIDTH and GAME_HEIGHT constants denote the size
// of the game area in pixels and is used in engine-utilities.js.
let body = document.querySelector('body'); 
body.style.backgroundColor="black";


const GAME_WIDTH = screen.width;
const GAME_HEIGHT = screen.height-150;

// These constants represent the width and height of an enemy in pixels
// as well as the maximum number of enemies on screen at any given time.
const ENEMY_WIDTH = 75;
const ENEMY_HEIGHT = 74.3349753695;
const MAX_ENEMIES = 4;

// These constants represent the player width and height.
const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 54;

let lifecount=3;
let level = 0; 
let loopCount = 0;
let whileLoopCount=0;

let divApp = document.querySelector('#app'); 

let placeholderDiv = document.createElement('div'); 
placeholderDiv.style.zIndex = 100;
placeholderDiv.style.position = 'absolute';
placeholderDiv.style.top = "10%";
placeholderDiv.style.left = "25%";
placeholderDiv.style.height = "80%";
placeholderDiv.style.width = "50%";
placeholderDiv.style.boxShadow="0px 0px 114px 12px #ff00f7";
placeholderDiv.style.backgroundColor="black";
placeholderDiv.style.color="white";
placeholderDiv.style.display="flex"; 
placeholderDiv.style.flexDirection="column"; 
placeholderDiv.style.justifyContent="center";
placeholderDiv.style.alignItems="center";
placeholderDiv.style.textAlign="center";
placeholderDiv.style.fontFamily="Arimo, sans-serif";
divApp.append(placeholderDiv);

let message = document.createElement('h1'); 
message.innerText="WELCOME TO LARA'S GAME"; 
message.style.textShadow="0 0 5px yellow";
placeholderDiv.append(message);
let message2 = document.createElement('h1');
message2.innerText="Keyboard right ⇦ | Keyboard left ⇨";
message2.style.textShadow="0 0 5px yellow";
placeholderDiv.append(message2);
let discoBallImg = document.createElement('img'); 
discoBallImg.setAttribute("src","./images/enemy.png"); 
discoBallImg.setAttribute("height","30px"); 
let bonusImg = document.createElement('img'); 
bonusImg.setAttribute("src","./images/bonus4.png"); 
bonusImg.setAttribute("height","30px"); 
let message3 = document.createElement('div'); 
message3.style.display="flex";
message3.style.alignItems="center";
let instructions1 = document.createElement('h1'); 
instructions1.innerText="Run from"; 
instructions1.style.textShadow="0 0 5px yellow";
message3.appendChild(instructions1);
message3.appendChild(discoBallImg);
let instructions2 = document.createElement('h1'); 
instructions2.innerText="| Collect ";
instructions2.style.textShadow="0 0 5px yellow";
message3.appendChild(instructions2);
message3.appendChild(bonusImg);
instructions1.style.padding="15px";
instructions2.style.padding="15px";
placeholderDiv.append(message3);
let buttonStart = document.createElement('button');
buttonStart.setAttribute("class","button");
buttonStart.innerText="START";
buttonStart.style.backgroundColor="black";
buttonStart.style.color="white"; 
buttonStart.style.boxShadow="0px 0px 10px green";
buttonStart.style.border="none";
buttonStart.style.fontSize="30px";
buttonStart.style.fontFamily="Arimo, sans-serif";
buttonStart.style.textShadow="0 0 5px yellow";
placeholderDiv.append(buttonStart);

let duaLipa = document.querySelector("#duaLipa"); 
duaLipa.style.display="none"; 
let loseAudio = document.querySelector("#lose"); 
loseAudio.style.display="none"; 
let winAudio = document.querySelector("#win"); 
winAudio.style.display="none"; 



