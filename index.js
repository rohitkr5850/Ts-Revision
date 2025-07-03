var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Task 1: Student Class
var Student = /** @class */ (function () {
    function Student(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student: ".concat(this.name, ", Age: ").concat(this.age, ", Roll No: ").concat(this.rollNo));
    };
    return Student;
}());
var student1 = new Student("Rohit", 20, 101);
var student2 = new Student("Priya", 22, 102);
student1.displayDetails();
student2.displayDetails();
// Task 2: Book Class
var Book = /** @class */ (function () {
    function Book(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    return Book;
}());
var myBook = new Book("The Alchemist", "Paulo Coelho", 299);
console.log("Title: ".concat(myBook.title, ", Author: ").concat(myBook.author, ", Price: \u20B9").concat(myBook.price));
// Task 3: Vehicle and Car (Inheritance)
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving at ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, speed, fuelType) {
        var _this = _super.call(this, brand, speed) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    Car.prototype.refuel = function () {
        console.log("Refueling ".concat(this.fuelType));
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 120, "Petrol");
myCar.drive();
myCar.refuel();
// Task 4: Protected + Admin Class
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.showUsername = function () {
        console.log("Username: ".concat(this.username));
    };
    return Admin;
}(User));
var adminUser = new Admin("admin_007");
adminUser.showUsername();
var MyDocument = /** @class */ (function () {
    function MyDocument() {
    }
    MyDocument.prototype.print = function () {
        console.log("Printing Document...");
    };
    return MyDocument;
}());
var Photo = /** @class */ (function () {
    function Photo() {
    }
    Photo.prototype.print = function () {
        console.log("Printing Photo...");
    };
    return Photo;
}());
var items = [new MyDocument(), new Photo()];
items.forEach(function (item) { return item.print(); });
// Task 6: Developer (Extend + Implement)
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.walk = function () {
        console.log("Walking...");
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.code = function () {
        console.log("Coding...");
    };
    return Developer;
}(Person));
var dev = new Developer();
dev.walk();
dev.code();
