namespace typeExtends {
  type Magic = {
    spell: string;
  };
  type Human = {
    name: string;
  };

  type Wizard = Human & Magic;

  const wizard: Wizard = {
    name: 'Jack',
    spell: 'fire',
  };

  console.log(wizard);
}
