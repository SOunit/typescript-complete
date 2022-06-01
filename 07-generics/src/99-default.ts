namespace tmp {
  interface ResponseData<T extends { message: string } = any> {
    data: T;
    status: number;
  }

  let tmp: ResponseData;
}

// default for generics type
// - possible by adding =
