namespace tmp {
  function copy<T extends { name: string }>(value: T): T {
    return value;
  }

  console.log(copy({ name: 'name' }).name);
}

// more strict generics
// 1. use extends
