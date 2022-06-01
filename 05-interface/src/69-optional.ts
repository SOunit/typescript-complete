namespace sixNine {
  interface Human {
    name?: string;
    age?: number;
    greeting(message?: string): void;
  }

  class Developer implements Human {
    name?: string;
    constructor(public age: number, initName?: string) {
      if (initName) {
        this.name = initName;
      }
    }
    greeting(message?: string): void {
      if (message) {
        console.log(message);
      }
    }
    speak(message: string = 'default') {
      console.log(message);
    }
  }

  const noName = new Developer(38);
  console.log(noName);
  const user = new Developer(38, 'Jack');
  console.log(user);

  // 69 optional
  // 1. optional by putting ?
  // 2. parameter can optional too. type check is optional
}
