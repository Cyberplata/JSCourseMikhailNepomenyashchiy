// Использование статических методов, геттеров и сеттеров
// Создайте класс Temperature, который:

// 1. в конструкторе принимает число в градусах Цельсия

// 2. может предоставлять информацию о градусах как в Цельсиях (ключ celsius), так и в Фаренгейтах (ключ fahrenheit)

// 3. для экземпляра класса позволяет изменить информацию класса, как по ключу celsius, так и fahrenheit

// 4. содержит статический метод fromFahrenheit для создания экземпляра с автоматически пересчитанным значением в Цельсиях (прим.: для округления значений используйте Math.round).


class Temperature { 
    constructor(temp = 0) {
        this.celsiusTemp = temp;
    }
    get celsius() {
        return this.celsiusTemp;
    }
    get fahrenheit() {
        return Math.round(this.celsiusTemp * 9/5 + 32);
    }
    set celsius(temp) {
        this.celsiusTemp = temp;
    }
    set fahrenheit(temp) {
        this.celsiusTemp = Math.round((temp - 32)) * 5/9;
    }
    static fromFahrenheit(temp) {
        return Math.round((temp - 32)) * 5/9;
    }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

const day2 = new Temperature(24);

const day3 = Temperature.fromFahrenheit(88);