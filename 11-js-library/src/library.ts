// 1. d.ts file offered
// already typed
import axios from 'axios';
axios.get('');

// 2. no d.ts file offered
// not typed
// - search type : npm i --save-dev @types/lodash

// 3. manual type definition
import _ from 'lodash';
_.shuffle([1, 2, 3]);
