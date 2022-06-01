interface Human {
  name?: string;
}

interface Developer {
  name: string | undefined;
}

const human: Human = {};
const dev: Developer = {
  name: undefined,
};

// 1. dev need name prop, and name prop can be string or undefined
// 2. human do NOT need name prop because it is optional
