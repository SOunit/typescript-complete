# how to separate files

- multiple script tag
  - fragile, easy to break
- es-module approach
  - not good import for ts
- webpack approach
  - for not modern browser
  - single http request to get resource
  - code optimization
  - add plugin
  - multiple file types
  - HMR / Hot Module Replacement server

## multiple script tags

- bad approach
  - easy to break
  - order matters, fragile approach

## es-module approach

- compile to js files
- use type=module script tag to import files

```
<script src="dist/food-app.js" type="module"></script>
```

- import needs extension

```
import { Foodable } from './interfaces.js';
```

## webpack approach

- create `package.json`
- install package

```
npm i -D webpack webpack-cli
```

- add script to `package.json`

```
"build": "webpack"
```

- add `webpack.config.js`
