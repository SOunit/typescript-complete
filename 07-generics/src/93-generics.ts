namespace tmp {
  function copy<T>(value: T): T {
    return value;
  }

  console.log(copy<string>('hello'));
  console.log(copy<number>(10));
  console.log(copy({ name: 'test' }).name);
}

// generics
// 1. pass type like argument
// 2. can use T anywhere after
