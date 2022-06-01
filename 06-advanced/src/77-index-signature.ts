namespace tmp {
  interface Designer {
    name: string;
    [index: string]: string;
  }

  const designer: Designer = {
    name: 'Jack',
    role: 'front-end',
  };

  designer.age = '30';
  console.log(designer.name);
  console.log(designer.age);
  console.log(designer.role);
  console.log(designer.beCarefulToUse);
}

// 1. all prop have to be same with index signature
// 2. weak type check, try not to use, and be careful when you use it
