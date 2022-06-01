namespace samePropInterface {
  type Human = {
    name: string;
  };

  type Wizard = {
    name: number;
  } & Human;

  const wizard: Wizard = { name: 'Jack' };
  console.log(wizard);
}
