namespace tmp {
  const input = <HTMLInputElement>document.getElementById('input');
  input.value = 'initial data';

  const input2 = document.getElementById('input') as HTMLInputElement;
  input2.value = 'initial data';

  (<HTMLInputElement>document.getElementById('input')).value = 'initial value';
  (document.getElementById('input') as HTMLInputElement).value =
    'initial value';
}

// type assertion
// 1. put tag
// 2. put as
