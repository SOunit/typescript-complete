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

## node import / export

- module.exports = target
- target can be anything, object / function / etc.

```
module.exports = {}
```
