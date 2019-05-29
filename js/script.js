function Phone(brand, price, color, memory) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and memory is " + this.memory + " GB" + ".");
}

var galaxyS6 = new Phone('Samsung', 2000, 'black', 64);

var iPhone6S = new Phone('Apple', 2250, 'silver', 32);

var one = new Phone('OnePlus', 2000, 'grey', 16);

galaxyS6.printInfo();

iPhone6S.printInfo();

one.printInfo();