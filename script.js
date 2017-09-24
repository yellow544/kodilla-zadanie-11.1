//Utworzenie funkcji konstruującej klasy i dodanie parametrów

function Phone(brand, price, color, screen, storage, system) {
this.brand = brand;
this.price = price;
this.color = color;
this.screen = screen;
this.storage = storage;
this.system = system;
}

//Utworzenie funkcji prototypowych - opisują metodę za pomocą console.log

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', ' + 'the screen size is ' + this.screen + ' inches, ' + 'the storage capacity is ' + this.storage + 'GB and the price is ' + this.price + 'zł.');
}

Phone.prototype.printSystemInfo = function () {
	console.log('The ' + this.brand + ' phone is using system ' + this.system + '.');
}

//Utworzenie obiektów 

const iPhone6s = new Phone('Apple', 2000, 'gold', 4.70, 16, 'iOS');
const samsungGalaxyS6 = new Phone('Samsung', 1500, 'white', 5.10, 32, 'Android');
const sonyXperiaZ5 = new Phone('Sony', 1200, 'black', 5.20, 32, 'Android');

//Wywołanie metody

iPhone6s.printInfo();
iPhone6s.printSystemInfo();
samsungGalaxyS6.printInfo();
samsungGalaxyS6.printSystemInfo();
sonyXperiaZ5.printInfo();
sonyXperiaZ5.printSystemInfo();