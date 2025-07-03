// Q1: Basic Inheritance
class Duck {
    swim(): void {
      console.log("I know swimming");
    }
  }
  
  class MallardDuck extends Duck {
   
  }
  
  const mallard = new MallardDuck();
  mallard.swim();  
  
  
  // Q2: Method Overriding Basics
  class Bird {
    fly(): void {
      console.log("I can fly");
    }
  }
  
  class Penguin extends Bird {
    fly(): void {
      console.log("I cannot fly"); 
    }
  }
  
  const genericBird = new Bird();
  genericBird.fly(); 
  
  const penguin = new Penguin();
  penguin.fly(); 
  
  
  // Q3: Interface Implementation
  interface IDuck {
    swim(): void;
    fly(): void;
    sound(): void;
  }
  
  class ToyDuck implements IDuck {
    fly(): void {
      console.log("Cannot fly");
    }
  
    sound(): void {
      console.log("Cannot sound");
    }
  
    swim(): void {
      console.log("Can float on water");
    }
  }
  
  const toy = new ToyDuck();
  toy.fly();     
  toy.sound();   
  toy.swim();   
  
  
  // Step 1: Define the interface
  interface FlyStrategy {
    fly(): void;
  }
  
  // Step 2: Concrete strategies
  class FastFly implements FlyStrategy {
    fly(): void {
      console.log("Flying fast like a rocket!");
    }
  }
  
  class NoFly implements FlyStrategy {
    fly(): void {
      console.log("I cannot fly");
    }
  }
  
  // Step 3: Duck class uses strategy
  class StrategyDuck {
    private flyStrategy: FlyStrategy;
  
    constructor(flyStrategy: FlyStrategy) {
      this.flyStrategy = flyStrategy;
    }
  
    performFly(): void {
      this.flyStrategy.fly();
    }
  
    setFlyStrategy(strategy: FlyStrategy): void {
      this.flyStrategy = strategy;
    }
  }
  
  // Step 4: Test
  const duck = new StrategyDuck(new FastFly());
  duck.performFly(); 
  
  duck.setFlyStrategy(new NoFly());
  duck.performFly(); 
  