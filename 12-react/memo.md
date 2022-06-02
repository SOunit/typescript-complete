# points

- setting for react / webpack / typescript
- react / typescript / create-react-app
- type for props
- type for hooks, redux, router

# react / webpack

- install

```
npm i react react-dom @types/react @types/react-dom
```

- change file extension to `tsx`
- change tsconfig.json

```
"jsx": "react" /* Specify what JSX code is generated. */,

```

- change webpack

```
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

```

```
resolve: {
extensions: ['.tsx', '.ts', '.js'],
},

```
