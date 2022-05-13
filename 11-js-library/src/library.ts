// 1. d.ts file offered
// already typed
import axios from 'axios';
import _ from 'lodash';

axios.get('');

// 2. no d.ts file offered
// not typed
// - search type : npm i --save-dev @types/lodash

// 3. manual type definition
// import _ from 'lodash';
// _.shuffle([1, 2, 3]);

// 4. cdn
console.log(_.shuffle([1, 2, 3]));

namespace myApp {
  const hello = 'hello in name space';
  export const name = 'name in name space';
}

const hello = 'hello in global' + myApp.name;
