# For hooks - true reactivity in JavaScript.

Example:
```js
import { useFor } from 'hooked-on-js'

let i = 0
useFor(i, i => i < 10, i => ++i, i => {
  console.log("In 'For' loop: ", i)
})
```
