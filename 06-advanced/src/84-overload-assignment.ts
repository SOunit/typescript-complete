namespace tmp {
  function toUpperCase(x: number): number;
  function toUpperCase(x: string): string;
  function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
      return x.toUpperCase();
    } else {
      return x;
    }
  }

  const upperHello = toUpperCase;

  interface OverloadType {
    (x: string): number;
    (x: number): number;
  }

  const upperHello2: OverloadType = function (x: string | number) {
    return 0;
  };

  upperHello2('test');
}

// overload
// 1. overload type
// -
