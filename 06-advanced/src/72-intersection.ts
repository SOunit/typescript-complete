namespace tmp {
  type Engineer = {
    name: string;
    role: string;
  };

  type Blogger = {
    name: string;
    follower: number;
  };

  type EngineerBlogger = Engineer & Blogger;

  const jack: EngineerBlogger = {
    name: 'Jack',
    role: 'front-end',
    follower: 10,
  };

  console.log(jack);
}

namespace tmp {
  interface Engineer {
    name: string;
    role: string;
  }

  interface Blogger {
    name: string;
    follower: number;
  }

  interface EngineerBlogger extends Engineer, Blogger {}

  const jack: EngineerBlogger = {
    name: 'Jack',
    role: 'front-end',
    follower: 10,
  };

  console.log(jack);
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 1. type intersection
// 2. interface intersection
// 3. (A | B) & (C | A) = A
