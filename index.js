

document.querySelector(".button").addEventListener("click", startFruitDrop);

function startFruitDrop() {
  shakeTree();
  let fruit = getRandomFruit();
  dropFruit(fruit);
  showMessage(fruit);
}

function shakeTree() {
  let tree = document.querySelector(".tree");
  tree.classList.add("shake");

  setTimeout(() => {
    tree.classList.remove("shake);")
  }, 500);
}

function getRandomFruit() {
    let fruits = ['lemon', 'kiwi', 'pineapple', 'lime', 'coconut', 'grape', 'watermelon', 'pear', 'tangerine', 'dragonfruit', 'mango', 'peach', 'pomelo', 'yuzu', 'citron', 'mandarin', 'clementine', 'cherry', 'orange', 'grapefruit', 'apple', 'banana'];
    let randFruit =   Math.floor(Math.random() * fruits.length);
    
    return fruits[randFruit];
  }

function dropFruit(fruit) {
  let fruitElement = document.querySelector(".mysteryFruit");
  if (!fruitElement) {
    console.error("Fruit element not found!");
    return;
  }

  fruitElement.src = `assets/mysteryfruit.png`;
  fruitElement.style.display = "block";
  fruitElement.style.animation = "none";
  setTimeout(() => {
    fruitElement.style.animation = "fall 1s ease-in-out forwards";
  }, 10);
}
  
function showMessage(fruit) {
  const fruitEmojis = {
      lemon: '🍋',
      lime: '🍋‍🟩',
      dragonfruit: '🐉',
      mango: '🥭',
      peach: '🍑',
      cherry: '🍒',
      pear: '🍐',
      kiwi: '🥝',
      pineapple: '🍍',
      coconut: '🥥',
      grape: '🍇',
      watermelon: '🍉',
      orange: '🍊',
      tangerine: '🍊',
      mandarin: '🍊',
      clementine: '🍊',
      pomelo: '🍋',
      yuzu: '🍋',
      citron: '🍋‍🟩',
      grapefruit: '🍊',
      apple: '🍏',
      banana: '🍌'
};

  let messageBox = document.querySelector(".message");
  let messageText = `You picked a ${fruit} ${fruitEmojis[fruit] || ''} - `;
  messageText += (fruit === "lemon" || fruit === "lime" || fruit === "tangerine" || fruit === "pomelo" || fruit === "yuzu" || fruit === "citron" || fruit === "mandarin" || fruit === "clementine" || fruit === "blood orange" || fruit === "orange" || fruit === "grapefruit")
    ? "Confirmed Citrus 🍊🍋🍋‍🟩"
    : "Not a Citrus ❌🍋"
  
  messageBox.innerHTML = `<p>${messageText}</p>`;
  messageBox.style.display = "block"; 
  
  };
  
  /* console.log(`fruit: ${fruit} ${fruitEmojis[fruit] || ''}`);
  
  switch (fruit) {
    case 'orange':
    console.log('citrus confirmed 🍊');
    break;
    case 'grapefruit':
    console.log('citrus confirmed 🍊');
    break;
    case 'apple':
    console.log('not citrus 🍏');
    break;
    default: console.log('unclear if citrus ❓🍊❓');
  }
*/
  // need a function to shake tree image
  // need a function to drop fruit image from tree to basket

