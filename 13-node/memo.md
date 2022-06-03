# steps

- compile ts by `tsc --watch`
- hot reload by `nodemon`

```
npm init -y
```

```
tsc --init
```

# points

- typescript do not understand commonjs import / export
- es-module import / export is recommended
- compare es-module / commonjs, import / export
- `esModuleInterop` (ES module inter operation) in `tsconfig.json`
  - how to es-module / commonjs / babel solve import / export syntax to JS
  - too minor and you can ignore this lecture
  - if your interested, you can check lesson again

## node import / export

- module.exports = target
- target can be anything, object / function / etc.

```
module.exports = {}
```
