# how to separate files

- multiple script tags

  - bad approach
    - easy to break
    - order matters, fragile approach

- es-module approach
  - compile to js files
  - use type=module script tag to import files
  ```
  <script src="dist/food-app.js" type="module"></script>
  ```
