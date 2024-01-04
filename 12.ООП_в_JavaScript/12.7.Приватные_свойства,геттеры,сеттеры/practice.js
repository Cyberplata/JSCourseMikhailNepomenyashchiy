// Использование статических методов, геттеров и сеттеров
// Создайте класс Temperature, который:

// 1. в конструкторе принимает число в градусах Цельсия

// 2. может предоставлять информацию о градусах как в Цельсиях (ключ celsius), так и в Фаренгейтах (ключ fahrenheit)

// 3. для экземпляра класса позволяет изменить информацию класса, как по ключу celsius, так и fahrenheit

// 4. содержит статический метод fromFahrenheit для создания экземпляра с автоматически пересчитанным значением в Цельсиях (прим.: для округления значений используйте Math.round).


class Temperature { 
    constructor(celsius) {
        this.celsius = celsius;
    }

    get celsius() {
        return this.celsius;
    }

    get fahrenheit() {
        return Math.round((this.celsius - 32) * 5/9);
    }

    static fromFahrenheit(celsius) {
        return Math.round(celsius * 9/5 + 32);
    }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

const day2 = new Temperature(24);

const day3 = Temperature.fromFahrenheit(88);