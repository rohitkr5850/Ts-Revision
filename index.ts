// Task 1: Student Class
class Student {
    name: string;
    age: number;
    rollNo: number;
  
    constructor(name: string, age: number, rollNo: number) {
      this.name = name;
      this.age = age;
      this.rollNo = rollNo;
    }
  
    displayDetails(): void {
      console.log(`Student: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`);
    }
  }
  
  const student1 = new Student("Rohit", 20, 101);
  const student2 = new Student("Priya", 22, 102);
  student1.displayDetails();
  student2.displayDetails();
  
  
  // Task 2: Book Class
  class Book {
    title: string;
    author: string;
    price: number;
  
    constructor(title: string, author: string, price: number) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
  }
  
  const myBook = new Book("The Alchemist", "Paulo Coelho", 299);
  console.log(`Title: ${myBook.title}, Author: ${myBook.author}, Price: ₹${myBook.price}`);
  
  
  // Task 3: Vehicle and Car (Inheritance)
  class Vehicle {
    brand: string;
    speed: number;
  
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
  
    drive(): void {
      console.log(`Driving at ${this.speed} km/h`);
    }
  }
  
  class Car extends Vehicle {
    fuelType: string;
  
    constructor(brand: string, speed: number, fuelType: string) {
      super(brand, speed);
      this.fuelType = fuelType;
    }
  
    refuel(): void {
      console.log(`Refueling ${this.fuelType}`);
    }
  }
  
  const myCar = new Car("Toyota", 120, "Petrol");
  myCar.drive();
  myCar.refuel();
  
  
  // Task 4: Protected + Admin Class
  class User {
    protected username: string;
  
    constructor(username: string) {
      this.username = username;
    }
  }
  
  class Admin extends User {
    showUsername(): void {
      console.log(`Username: ${this.username}`);
    }
  }
  
  const adminUser = new Admin("admin_007");
  adminUser.showUsername();
  
  
  //  Task 5: Interface Printable
  interface Printable {
    print(): void;
  }
  
  class MyDocument implements Printable {
    print(): void {
      console.log("Printing Document...");
    }
  }
  
  class Photo implements Printable {
    print(): void {
      console.log("Printing Photo...");
    }
  }
  
  const items: Printable[] = [new MyDocument(), new Photo()];
  items.forEach(item => item.print());
  
  
  // Task 6: Developer (Extend + Implement)
  class Person {
    walk(): void {
      console.log("Walking...");
    }
  }
  
  interface Coder {
    code(): void;
  }
  
  class Developer extends Person implements Coder {
    code(): void {
      console.log("Coding...");
    }
  }
  
  const dev = new Developer();
  dev.walk();
  dev.code();
  