// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    // console.log(obj);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delish pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: "18:30",
  address: "rio del colo",
  mainIndex: 2,
  starterIndex: 2,
});

/* ------THE SPREAD OPERATOR------ */
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

// creating a new array for new menu and expending it
const newMenu = [...restaurant.mainMenu, "Gnocci"];
// the spread operator takes all the elements of the array and do not create new variables
// can be used only in places where we would write values separated by commas.
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; //shellow copy

// Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// The spread operator works on all itterables! arrays, strings, maps, sets. NOT OBJECTS
const newString = "omri";
const letters = [...newString, " ", "OOO"];
console.log(letters);

// function that takes multiple arguements with the spread.
//real world example:
const ingredients = [
  //   prompt("let's make pasta! ingredient 1? "),
  //   prompt("let's make pasta! ingredient 2? "),
  //   prompt("let's make pasta! ingredient 3? "),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// spreading objects ?
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Espallla" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Risotatttta";
console.log(restaurant.name, restaurantCopy.name);

//----------------------------------------------------//
/*   Objects destructuring
// when destructuring objects, the order of them does not matter only the exact name of the key
//destructuring objects
const { name, openingHours, categories } = restaurant;

//setting default values
const { menu = [], starterMenu: starters = []} = restaurant;

//mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 55 };
({ a, b } = obj);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
