	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: false,
		price: 1.99,
		img:'images/brok.jpg'
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		img:'images/homemade-bread-resize-6.jpg'
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		price: 4.00,
		img:'images/eggs.jpg'
	},
	{
		name: "spinach",
		vegetarian: true,
		glutenFree: true,
		price: 5.00,
		img:'images/spinach.jpg'
	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		price: 5.00,
		img:'images/tomatoes.jpg'
	},
	{
		name: "corns",
		vegetarian: true,
		glutenFree: true,
		price: 6.00,
		img:'images/corns.jpg'
		
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		img:'images/homemade-bread-resize-6.jpg'
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 11.00,
		img:'images/salmon.jpg'
	},
	{
		name: "Beans",
		vegetarian: true,
		glutenFree: true,
		price: 12.00,
		img:'images/beans.jpg'
	},
	
	{
		name: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 14.00,
		img:'images/meat.jpg'
	},
	


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}
function product_images(prods, restriction) {
	let images = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			images.push(prods[i].img);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			images.push(prods[i].img);
		}
		else if (restriction == "None"){
			images.push(prods[i].img);
		}
	}
	return images;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
			
		}
	}
	return totalPrice+ '$';
}
