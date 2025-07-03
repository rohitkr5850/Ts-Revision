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
// Q1: Basic Inheritance
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.swim = function () {
        console.log("I know swimming");
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MallardDuck;
}(Duck));
var mallard = new MallardDuck();
mallard.swim();
// Q2: Method Overriding Basics
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("I can fly");
    };
    return Bird;
}());
var Penguin = /** @class */ (function (_super) {
    __extends(Penguin, _super);
    function Penguin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Penguin.prototype.fly = function () {
        console.log("I cannot fly");
    };
    return Penguin;
}(Bird));
var genericBird = new Bird();
genericBird.fly();
var penguin = new Penguin();
penguin.fly();
var ToyDuck = /** @class */ (function () {
    function ToyDuck() {
    }
    ToyDuck.prototype.fly = function () {
        console.log("Cannot fly");
    };
    ToyDuck.prototype.sound = function () {
        console.log("Cannot sound");
    };
    ToyDuck.prototype.swim = function () {
        console.log("Can float on water");
    };
    return ToyDuck;
}());
var toy = new ToyDuck();
toy.fly();
toy.sound();
toy.swim();
// Step 2: Concrete strategies
var FastFly = /** @class */ (function () {
    function FastFly() {
    }
    FastFly.prototype.fly = function () {
        console.log("Flying fast like a rocket!");
    };
    return FastFly;
}());
var NoFly = /** @class */ (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        console.log("I cannot fly");
    };
    return NoFly;
}());
// Step 3: Duck class uses strategy
var StrategyDuck = /** @class */ (function () {
    function StrategyDuck(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }
    StrategyDuck.prototype.performFly = function () {
        this.flyStrategy.fly();
    };
    StrategyDuck.prototype.setFlyStrategy = function (strategy) {
        this.flyStrategy = strategy;
    };
    return StrategyDuck;
}());
// Step 4: Test
var duck = new StrategyDuck(new FastFly());
duck.performFly();
duck.setFlyStrategy(new NoFly());
duck.performFly();
