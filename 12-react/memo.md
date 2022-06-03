# points

- setting for react / webpack / typescript
- react / typescript / create-react-app
- type for props
- type for hooks, redux, router
  - hover and check type
  - typescript is document
  - some library has TS document, but not detail in average

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

# create-react-app

```
npx create-react-app 02-create-react-app --template typescript
```

- react-script using webpack internally
- type for props
  - type / interface both is ok
    - type for personal type
    - interface for 3rd party package
