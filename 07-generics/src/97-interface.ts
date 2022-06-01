namespace tmp {
  interface TmpDatabase<T> {
    id: number;
    data: T[];
  }

  const tmpDatabase: TmpDatabase<number> = {
    id: 100,
    data: [30, 40, 50, 60, 70],
  };

  type TmpDatabase2<T> = {
    id: number;
    data: T[];
  };

  const tmpDatabase2: TmpDatabase2<number> = {
    id: 200,
    data: [200, 300, 400],
  };

  console.log(tmpDatabase);
  console.log(tmpDatabase2);
}

// 1. interface and generics
// 2. type and generics
