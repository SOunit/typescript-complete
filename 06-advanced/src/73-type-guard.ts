namespace tmp {
  function toUpperCase(x: string | number): string {
    if (typeof x === 'string') {
      return x.toUpperCase();
    } else {
      return '';
    }
  }

  type Engineer = {
    name: string;
    role: string;
    code: string;
  };

  type Blogger = {
    name: string;
    follower: number;
  };

  type NomadWorker = Engineer | Blogger;

  function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker);

    if (typeof nomadWorker === 'object') {
      nomadWorker.name;
    }

    if ('role' in nomadWorker) {
      nomadWorker.role;
      nomadWorker.code;
    }
  }

  class Dog {
    speak() {
      console.log('bow-wow');
    }
  }

  class Bird {
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

    if ('fly' in pet) {
      pet.fly();
    }

    if (pet instanceof Bird) {
      pet.fly();
    }
  }

  // 1. typeof / only for 7 types
  // 2. in / to decide type
  // 3. instanceof / to decide type
}
