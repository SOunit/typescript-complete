namespace tmp {
  type ConditionType = 'tomato' extends string ? number : boolean;

  type ConditionTypeInfer = { tomato: 'tomato' } extends { tomato: infer R }
    ? R
    : boolean;

  type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
  let tmp: DistributiveConditionalTypes<'tomato' | 'potato'>;
}

// condition type
// 1. like Ternary operator
// 2. if Condition ? num : bool

// condition infer
// 1. check condition
// 2. infer type from condition

// distributive conditional types
// 1. check left of condition
// 2. check right of condition
// 3. create union
// used in utility

// image
//   type DistributiveConditionalTypes = 'tomato' | 'potato' extends 'tomato'
//     ? number
//     : boolean;
