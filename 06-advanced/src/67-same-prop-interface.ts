namespace samePropInterface {
  interface Human {
    name: string;
  }

  class Wizard implements Human {
    constructor(public name: string) {}
  }

  const wizard = new Wizard('Jack');
  console.log(wizard);
}

// 1. same name props can be overwritten as far as type is same
// 2. name is string & number, this become type never
