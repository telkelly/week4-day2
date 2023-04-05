// exercise-1 part-1

const infoAboutMe = () => {
  return console.log(
    "My name is Kelly, I'm 23 years old, my fav color is orange"
  );
};
infoAboutMe();

// part-2

const infoAboutPerson = (name, age, favColor) => {
  return console.log(
    `My name is ${name}, I'm ${age} years old, my fav color is ${favColor}`
  );
};

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// exercise-2

const tipCalculator = () => {
  let question = prompt("What is amout of your bill?");
  let amount = Number(question);
  if (amount <= 50) {
    let tip = amount * 0.2;
    console.log(`Your final bill is ${amount + tip}`);
  } else if (amount > 50 && amount < 200) {
    let tip = amount * 0.15;
    console.log(`Your final bill is ${amount + tip}`);
  } else if (amount >= 200) {
    let tip = amount * 0.1;
    console.log(`Your final bill is ${amount + tip}`);
  }
};

// tipCalculator()

// exercise-3

const isDivisible = (divisor) => {
  let count = 0;
  for (let i = 0; i < 500; i++) {
    if (i % divisor == 0) {
      count += i;
    }
  }
  return count;
};

console.log(isDivisible(23));

// exercise-4

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

const myBill = () => {
  let inStock = [];
  for (let i = 0; i < shoppingList.length; i++) {
    for (const item in stock) {
      if (shoppingList[i] === stock["item"]) {
        inStock.push(shoppingList[i]);
      }
    }
  }
  return inStock;
};

// console.log(myBill())

// exercise-5

const changeEnough = (itemPrice, amountOfChange) => {
  let quarters = amountOfChange[0] * 0.25;
  let dimes = amountOfChange[1] * 0.1;
  let nickel = amountOfChange[2] * 0.05;
  let penny = amountOfChange[3] * 0.01;
  let sum = quarters + dimes + nickel + penny;
  if (itemPrice > sum) {
    return false;
  } else {
    return true;
  }
};

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

//exercise-6

const hotelCost = () => {
  let question;
  while (!onlyNum(question)) {
    question = prompt("How many nights would you stay in the hotel?");
  }
};

const onlyNum = (str) => {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

console.log(hotelCost());
