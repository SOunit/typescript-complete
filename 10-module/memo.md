# how to separate files

- multiple script tag
  - fragile, easy to break
- es-module approach
  - not good import for ts
- webpack approach
  -

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
