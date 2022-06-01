namespace tmp {
  interface Todo {
    title: string;
    text: string;
  }

  type TodoTable = Partial<Todo>;
  type ReadTodo = Readonly<Todo>;

  const fetchData = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('hello from promise');
    }, 500);
  });

  fetchData.then((data) => {
    console.log(data.toLowerCase());
  });

  const vegetables: Array<string> = ['Tomato', 'Potato', 'Tomato'];
  const arr: string[] = ['a', 'b', 'c'];
}

// 1. utility
// - generics build-in TS

// 2. partial
// - make all optional

// 3. readonly
// - make all readonly

// 4. promise

// 5. Array
