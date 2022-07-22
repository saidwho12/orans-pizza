var PIZZA_SMALL = 0;
var PIZZA_MEDIUM = 1;
var PIZZA_LARGE = 2;
var PIZZA_EXTRA_LARGE = 3;
var PIZZA_EXTRA_EXTRA_LARGE = 4;

var pizza_size_lookup_table = {
	PIZZA_SMALL: 10,
	PIZZA_MEDIUM: 12,
	PIZZA_LARGE: 14,
	PIZZA_EXTRA_LARGE: 16
}

class PizzaPrice {
	constructor(size, price) {
		this.size = size;
		this.price = price;
	}
}

var FOOD_TYPE_UNDEFINED = -1;
var FOOD_TYPE_DRINK = 0;
var FOOD_TYPE_PIZZA = 1;
var FOOD_TYPE_SHEWARMA = 2;
var FOOD_TYPE_SALAD = 3;
var FOOD_TYPE_FRIES = 4;
var FOOD_TYPE_PIZZA_COMBOS = 5;


class Food {
	type = FOOD_TYPE_UNDEFINED;
	title = null;
	imgpath = null;
	desc = null;

	constructor(type, title, imgpath, desc) {
		this.title = title;
		this.type = type;
		this.imgpath = imgpath;
		this.desc = desc;
	}
}

class Pizza extends Food {
	constructor(title, imgpath, desc, prices) {
		super(FOOD_TYPE_PIZZA,title,imgpath,desc);
		this.prices = prices;
	}
}

class Drink extends Food {
	constructor(title, imgpath, desc, price) {
		super(FOOD_TYPE_DRINK,title,imgpath,desc);
		this.price = price;
	}

	getPrice() {
		return this.price;
	}
}


var menuFoods = [];
menuFoods.push(new Pizza("Greek", "./images/greek.jpg", "Greek Pizza", {PIZZA_SMALL:14.99, PIZZA_MEDIUM:17.99, PIZZA_LARGE:19.99, PIZZA_EXTRA_LARGE:23.99}));
menuFoods.push(new Pizza("Four Cheese", "./images/4cheese1.jpg", "Four Cheese Pizza", {PIZZA_SMALL:14.99, PIZZA_MEDIUM:16.99, PIZZA_LARGE:18.99, PIZZA_EXTRA_LARGE:22.99}));
menuFoods.push(new Pizza("Pepperoni", "./images/pepperoni.jpg", "Pepperoni Pizza", {PIZZA_SMALL:11.99, PIZZA_MEDIUM:13.99, PIZZA_LARGE:15.99, PIZZA_EXTRA_LARGE:17.99}));
menuFoods.push(new Pizza("Oriental", "./images/oriental.jpg", "Oriental Pizza", {PIZZA_SMALL:14.99, PIZZA_MEDIUM:17.99, PIZZA_LARGE:19.99, PIZZA_EXTRA_LARGE:23.99}));
menuFoods.push(new Pizza("Monaco", "./images/monaco.jpg", "Monaco Pizza", {PIZZA_SMALL:15.99, PIZZA_MEDIUM:18.99, PIZZA_LARGE:20.99, PIZZA_EXTRA_LARGE:24.99}));
menuFoods.push(new Drink("Coca Cola Can", "./images/PNGPIX-COM-Coca-Cola-Soda-Can-PNG-Image-1536x1417.png", "Coca Cola Original Taste Can 355mL", 1.0));
menuFoods.push(new Drink("Pepsi", "./images/pepsi1.jpg", "Pepsi Can 355mL", 1.0));

console.log(menuFoods);

var menuDiv = document.getElementById("menu");

// menuFoods.forEach((food, index) => {
//   console.log(`${index} : ${food}`);
//   menuDiv.innerHTML += "".concat('<div class="col"><div class="card h-100"><a href="#"><img src="', food.Food.imgpath,
// 		'" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">', food.title, '</h5><p class="card-text">',
// 		food.desc, '</p></div></div></div>');
// });

for (var i = 0; i < menuFoods.length; ++i) {
	var food = menuFoods[i];
	console.log(`${i} : ${food}`);

	if (food.type == FOOD_TYPE_PIZZA) {
		const keys = Object.keys(food.prices);
		menuDiv.innerHTML += "".concat('<div class="col"><div class="card h-100"><a href="#"><img src="', menuFoods[i].imgpath,
			'" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">', food.title, '</h5><p class="card-text">',
			food.desc, ' small: $', food.prices[keys[PIZZA_SMALL]],
			' medium: $', food.prices[keys[PIZZA_MEDIUM]],
			' large: $', food.prices[keys[PIZZA_LARGE]],
			' extra large: $', food.prices[keys[PIZZA_EXTRA_LARGE]],
			'</p></div></div></div>');
	} else {
		menuDiv.innerHTML += "".concat('<div class="col"><div class="card h-100"><a href="#"><img src="', menuFoods[i].imgpath,
			'" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">', food.title, '</h5><p class="card-text">',
			food.desc, ' price : $', food.price, '</p></div></div></div>');
	}
}