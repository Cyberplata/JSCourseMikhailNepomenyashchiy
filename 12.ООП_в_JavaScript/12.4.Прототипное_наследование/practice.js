// Создание простого класса и его экземпляров
// Создайте класс Rectangle, который в конструкторе принимает ширину и высоту. Класс должен содержать метод area, который при вызове возвращает площадь заданного прямоугольника.

// Пример использования:
// const rect1 = new Rectangle(5, 6);
// console.log(rect1.area()) // должен вернуть 30


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

const rect1 = new Rectangle(5, 6);
console.log(rect1.area())