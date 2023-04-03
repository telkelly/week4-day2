// exercise-1 part-1

const infoAboutMe = () => {
    return console.log("My name is Kelly, I'm 23 years old, my fav color is orange");

}
infoAboutMe() 

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
    let question = prompt("What is amout of your bill?")
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
}

tipCalculator()

// exercise-3