document.querySelector(".button").addEventListener("click", startFruitDrop);

function startFruitDrop() {
  shakeTree();

  setTimeout(() => {
    let fruit = getRandomFruit();
    dropFruit(fruit);
    
    setTimeout (() => {
      showMessage(fruit);
    }, 1000);
  }, 500);
}

function shakeTree() {
  let tree = document.querySelector(".tree");

  tree.classList.remove("shake");
  void tree.offsetWidth;

  setTimeout(() => {
    tree.classList.add("shake");
  }, 10);
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
  void fruitElement.offsetWidth;
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
  let messageText = `You picked a ${fruit} ${fruitEmojis[fruit] || ''}! This fruit is `;
  messageText += (fruit === "lemon" || fruit === "lime" || fruit === "tangerine" || fruit === "pomelo" || fruit === "yuzu" || fruit === "citron" || fruit === "mandarin" || fruit === "clementine" || fruit === "blood orange" || fruit === "orange" || fruit === "grapefruit")
    ? "confirmed citrus 🍊🍋🍋‍🟩"
    : "not a citrus ❌🍋"
  
  messageBox.innerHTML = `<p>${messageText}</p>`;
  messageBox.style.display = "block"; 
  
  };
  