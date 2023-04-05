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

let hotel = prompt("How many nights would you stay in the hotel?");
let plane = prompt("What is your destination?");
let car = prompt("How many days would you like to rent a car?");

const hotelCost = () => {
  while (!onlyNum(hotel)) {
    hotel = prompt("How many nights would you stay in the hotel?");
  }

  hotel *= 140
  
  return hotel;
};

const onlyNum = (str) => {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

const planeRideCost = () => {
  while (onlyNum(plane)) {
    plane = prompt("What is your destination?");
  }
  plane = plane.toLowerCase();
  switch (plane) {
    case "london":
      plane = 183;
      break;
    case "paris":
      plane = 220;
      break;
    default:
      plane = 300;
      break;
  }
  return plane;
}

const rentalCarCost = () => {
  while (!onlyNum(car)) {
    car = prompt("How many days would you like to rent a car?");
  }
  if (car >= 5) {
    let discount = car * 40 * 0.05;
    return car * 40 - discount;
  } else {
    return car *= 40;
  }
}

const totalVacationCost = () => {
  return alert(`The car costs: $${rentalCarCost()}, the hotel costs: $${hotelCost()}, the plane costs: $${planeRideCost()}`)
}

totalVacationCost()
