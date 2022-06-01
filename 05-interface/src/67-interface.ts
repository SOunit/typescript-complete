namespace sixSeven {
  interface AddFunc {
    (num1: number, num2: number): number;
  }
  let addFunc: AddFunc;
  addFunc = (n1, n2) => {
    return n1 + n2;
  };

  interface Nameable {
    readonly name: string;
    nickname?: string;
  }

  const nameable: Nameable = { name: 'name' };

  interface Animal {}

  interface Human extends Nameable, Animal {
    age: number;
    // greeting: (message: string) => void;
    greeting(message: string): void;
  }

  interface Lazy {
    isLazy(): boolean;
  }

  const jack: Human = {
    name: 'Jack',
    age: 38,
    greeting(message: string) {
      console.log(message);
    },
  };

  class Developer implements Human, Lazy {
    constructor(
      public name: string,
      public age: number,
      public experience: number
    ) {}
    greeting(message: string): void {}
    isLazy(): boolean {
      return true;
    }
  }

  const tempDeveloper = {
    name: 'name',
    age: 38,
    experience: 10,
    greeting() {},
    isLazy() {
      return true;
    },
  };

  const user: Human = new Developer('Jack', 38, 3);
  const user2: Human = tempDeveloper;

  // 67. interface and extends

  // 68. interface for function
  // 1. not recommended, confusing. interface is mainly for object

  // 69. optional
}
