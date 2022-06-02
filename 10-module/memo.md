# summary

## for bundle TS files

- webpack / ts-loader / webpack-dev-server
  - no tsc build
  - webpack load ts and run!

## for single TS file

- `tsc --watch`
  - tsc create build files
  - html file reload js files

# how to separate files

- multiple script tag

  - fragile, easy to break

- es-module approach

  - not good import for ts
  - working with `tsc`

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

### devtool

### ts-loader

- install

```
npm i -D ts-loader typescript
```

- add `module`, how to download files
  - use `ts-loader` for `.ts` files

```
module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
```

- remove extension from TS files
- add `resolve` to `webpack.config.js`

```
  resolve: {
    extensions: ['.ts', '.js'],
  },
```
