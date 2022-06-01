namespace tmp {
  function toUpperCase(x: number): number;
  function toUpperCase(x: string): string;
  function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
      return x.toUpperCase();
    } else {
      return x;
    }
  }

  const upperHello = toUpperCase('hello');
  console.log(upperHello);
  const number = toUpperCase(30);
  console.log(number);
}

// 1. overload to apply correct type to return value
