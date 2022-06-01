namespace tmp {
  class Dog {
    kind: 'dog' = 'dog';
    speak() {
      console.log('bow-wow');
    }
  }

  class Bird {
    kind: 'bird' = 'bird';
    speak() {
      console.log('tweet-tweet');
    }
    fly() {
      console.log('flutter');
    }
  }

  type Pet = Dog | Bird;

  function havePet(pet: Pet) {
    pet.speak();

    switch (pet.kind) {
      case 'bird': {
        pet.fly();
      }
      case 'dog': {
        pet.speak();
      }
    }
  }

  havePet(new Bird());
}

// tag-union
// 1. for type-guard
// 2. design pattern
