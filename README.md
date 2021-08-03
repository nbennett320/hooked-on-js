# hooked-on-js - true reactivity in JavaScript.

Example:
```js
import { useFor, useIf } from 'hooked-on-js'

let i = 0
useFor(i, i => i < 10, i => ++i, i => {
  useIf(() => i % 2 === 0, () => {
    console.log("In 'For' loop: ", i)
  })
})

// output:
// In 'For' loop:  0
// In 'For' loop:  2
// In 'For' loop:  4
// In 'For' loop:  6
// In 'For' loop:  8
```
