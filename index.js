

document.querySelector(".button").addEventListener("click", startFruitDrop);

function startFruitDrop(){
  
}

function getRandomFruit() {
    let fruits = ['lemon', 'orange', 'grapefruit', 'apple', 'banana'];
    let randFruit =   Math.floor(Math.random() * fruits.length);
    
    return fruits[randFruit];
  }
  
  let fruit = selectedFruit();
  
  const fruitEmojis = {
    lemon: '🍋',
    orange: '🍊',
    grapefruit: '🍊',
    apple: '🍏',
    banana: '🍌'
  };
  
  console.log(`fruit: ${fruit} ${fruitEmojis[fruit] || ''}`);
  
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

  // need a function to shake tree image
  // need a function to drop fruit image from tree to basket

