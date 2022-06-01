namespace tmp {
  class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
      this.data.push(item);
    }
    remove(item: T) {
      this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
      return this.data;
    }
  }

  type FailType = string | number | boolean;

  class FailedDatabase {
    private data: FailType[] = [];
    add(item: FailType) {
      this.data.push(item);
    }
    remove(item: FailType) {
      this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
      return this.data;
    }
  }

  const stringLightDatabase = new LightDatabase<string>();

  stringLightDatabase.add('apple');
  stringLightDatabase.add('banana');
  stringLightDatabase.add('grape');
  console.log(stringLightDatabase.get());

  stringLightDatabase.remove('banana');
  console.log(stringLightDatabase.get());

  const failedDatabase = new FailedDatabase();
  failedDatabase.add(10);
  failedDatabase.add('str');
  failedDatabase.add(false);

  console.log(failedDatabase.get());
}

// generics with class
// 1. union is not same. union is A or B or C.
// 2. generics is type-safe and flexible
