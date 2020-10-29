// In this file we have functions that will be used in the Engine.js file.
// nextEnemySpot is a variable that refers to a function. The function has one parameter,
// which we called enemies. enemies will refer to an array that will contain instances of the
// Enemy class. To get more information about the argument that will get passed to this function,
// please see the Engine.js file.

// The purpose of this function is to determine in which slot to place our next enemy.
// The possibilities are 0, 1, 2, 3 or 4.
const nextEnemySpot = (enemies) => {
  // enemySpots will refer to the number of spots available (can you calculate it?)
  const enemySpots = Math.floor(GAME_WIDTH / ENEMY_WIDTH);

  // To find out where to place an enemy, we first need to find out which are the spots available.
  // We don't want to place two enemies in the same lane. To accomplish this, we first create an
  // array with 5 elements (why 5?) and each element is false.
  // We then use forEach to iterate through all the enemies.
  // If you look at the constructor of the Enemy class, you can see that every instance will have a spot property.
  // We can use this property to modify the spotsTaken array.
  const spotsTaken = [];
  for (let i=0; i<enemySpots; i++) { 
    spotsTaken.push(false); 
  }; 
  enemies.forEach((enemy) => {
    spotsTaken[enemy.spot] = true;
  });

  // We are now in a position to find out position. We declare a variable candidate that is initially undefined.
  // candidate represents a potential spot. The variable will be repeatedly assigned different numbers.
  // We will randomly try different spots until we find out that is available
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    // candidate is assigned a random number between 0 and enemySpots (not including enemySpots). (what number is enemySpots?)
    candidate = Math.floor(Math.random() * enemySpots);
  }

  // When the while loop is finished, we are assured that we have a number that corresponds to a free spot, so we return it.
  return candidate;
};

// addBackground contains all the logic to display the starry background of the game.
// It is a variable that refers to a function.
// The function takes one parameter
// The parameter represents the DOM node to which we will add the background
const addBackground = (root) => {
  // We create a new img DOM node.
  const bg = document.createElement('img');

  // We set its src attribute and the height and width CSS attributes
  bg.src = 'images/stars.png';
  bg.style.objectFit="cover";
  bg.style.height = "100%";//`${GAME_HEIGHT}px`;
  bg.style.width = "100%";//`${GAME_WIDTH}px`;

  // We add it to the root DOM node
  root.append(bg);

  let lifecountDiv = document.createElement('div'); 
  lifecountDiv.style.zIndex = 50;
  lifecountDiv.style.position = 'absolute';
  lifecountDiv.style.top = "30px";
  lifecountDiv.style.right = "10px";
  lifecountDiv.style.height = "80px";
  lifecountDiv.style.width = "80px";
  lifecountDiv.style.opacity="0.9";
  lifecountDiv.style.boxShadow="0px 0px 114px 12px rgba(1,213,218,1)";
  lifecountDiv.innerText= "LIVES\n"+ lifecount;
  lifecountDiv.setAttribute("class","lifecountDiv");
  lifecountDiv.style.display="flex"; 
  lifecountDiv.style.justifyContent="center";
  lifecountDiv.style.alignItems="center";
  lifecountDiv.style.textAlign="center";
  lifecountDiv.style.color="#cf7421";
  lifecountDiv.style.fontSize="23px";
  lifecountDiv.style.fontFamily="Arimo, sans-serif";
  lifecountDiv.style.textShadow="0 0 3px #cf7421";
  root.append(lifecountDiv);

  let levelDiv = document.createElement('div'); 
  levelDiv.style.zIndex = 50;
  levelDiv.style.position = 'absolute';
  levelDiv.style.top = "120px";
  levelDiv.style.right = "10px";
  levelDiv.style.height = "80px";
  levelDiv.style.width = "80px";
  levelDiv.style.opacity="0.9";
  levelDiv.style.boxShadow="0px 0px 114px 12px rgba(1,213,218,1)";
  levelDiv.innerText= "LEVEL\n"+ level;
  levelDiv.setAttribute("class","levelDiv");
  levelDiv.style.display="flex"; 
  levelDiv.style.justifyContent="center";
  levelDiv.style.alignItems="center";
  levelDiv.style.textAlign="center";
  levelDiv.style.color="#cf7421";
  levelDiv.style.fontSize="23px";
  levelDiv.style.fontFamily="Arimo, sans-serif";
  levelDiv.style.textShadow="0 0 3px #cf7421";
  root.append(levelDiv);



  // We don't want the enemies to go beyond the lower edge of the image
  // so we place a white div to hide the enemies after they reach the bottom.
  // To see what it does, you can comment out all the remaining lines in the function to see the effect.
  const whiteBox = document.createElement('div');

  // We put a high z-index so that the div is placed over all other DOM nodes
  whiteBox.style.zIndex = 100;
  whiteBox.style.position = 'absolute';
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = 'black';
  //root.append(whiteBox);
};
