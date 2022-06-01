namespace tmp {
  type MappedTypes = {
    [P in 'tomato' | 'banana']: string;
  };

  type MappedNumbers = {
    [P in 10 | 20 | 30]: number;
  };

  interface Vegetables2 {
    tomato: string;
    banana: string;
  }

  type MappedVegetables2 = {
    [P in keyof Vegetables2]: string;
  };

  type MappedVegetables3<T> = {
    [P in keyof T]: string;
  };

  type MappedVegetables4<T> = {
    readonly [P in keyof T]: string;
  };

  type MappedVegetables5<T> = {
    -readonly [P in keyof T]: string;
  };

  type MappedVegetables6<T> = {
    [P in keyof T]?: string;
  };

  type MappedVegetables7<T> = {
    -readonly [P in keyof T]-?: string;
  };

  // mapped-types
  // 1. for loop
  // 2. used inside utility types
}
