namespace tmp {
  type K = keyof { name: string; age: number };

  function copy<T extends { name: string }, U extends keyof T>(
    value: T,
    key: U
  ): T {
    value[key];
    return value;
  }

  console.log(copy({ name: 'name', age: 38 }, 'name').name);
}

// keyof
// 1. get keys and make union
// 2. used for flexible key
