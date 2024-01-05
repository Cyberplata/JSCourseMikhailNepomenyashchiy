// Использование статических методов, геттеров и сеттеров
// Создайте класс Temperature, который:

// 1. в конструкторе принимает число в градусах Цельсия

// 2. может предоставлять информацию о градусах как в Цельсиях (ключ celsius), так и в Фаренгейтах (ключ fahrenheit)

// 3. для экземпляра класса позволяет изменить информацию класса, как по ключу celsius, так и fahrenheit

// 4. содержит статический метод fromFahrenheit для создания экземпляра с автоматически пересчитанным значением в Цельсиях (прим.: для округления значений используйте Math.round).


class Temperature {
	constructor(t = 0) {
		this.celsiusTemp = t;
	}
	get celsius() {
		return this.celsiusTemp;
	}
	get fahrenheit() {
		return Math.round(this.celsiusTemp * 1.8 + 32);
	}
	set celsius(t) {
		this.celsiusTemp = t;
	}
	set fahrenheit(t) {
		this.celsiusTemp = Math.round((t - 32) / 1.8);
	}
	static fromFahrenheit(t) {
		return Math.round((t - 32) / 1.8);
	}
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

const day2 = new Temperature(24);

const day3 = Temperature.fromFahrenheit(88);