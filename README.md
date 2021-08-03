# hooked-on-js –– true reactivity in JavaScript.

`hooked-on-js` is the most revolutionary library to see the pages of [npmjs.com](npmjs.com) ever in the history of Javascript.

<a href="api-summary">
**Intuitive API 🤓**
</a>
`hooked-on-js` is designed to interface with programmers' existing knowledge by mimicking many of the 
syntaxes and syntactic sugars used by the infamous C-inspired languages. Such an implementation allows developers 
to pick up `hooked-on-js` without the need to dive deep into the docs _(🤢)_ to achieve the desired result.

Take a gander at this brief example _(there are more examples provided in the [examples](#examples) section 😉)_.
The code below shows just how similar the `hooked-on-js` API is, compared to normal JavaScript syntax.
```js
// boring JavaScript
let i = 0
for(i; i < 10; i++) {
  // do something boring from 0..9
}

// awesome hooks!
import { useFor } from 'hooked-on-js'

useFor(0, i => i < 10, i => i++, i => {
  // do something awesome from 0..9!
  // and, no, I don't mean nine-factorial 🤣
})
```

<a href="safety">
**(Type) safety first! ✋🛑** 
</a>
Type safety has been a tremendous burden on JavaScript developers since day one (...or should I say _day zero_, 😉).
Thankfully the brillant minds at Microsoft have worked tirelessly to create and implement a solution that 
integrate seamlessly with the workflow and vernacular of all Javascript programmers –– TypeScript!
Likewise, `hooked-on-js` has been thoughtfully engineered _(or re-engineered)_  from the ground-up with type safety in mind. 
Early adopters of `hooked-on-js` _(formerly, `For.js`)_ will remember countless long nights spent awake, writhing anxiously, 
dreading that an end-user might encounter an unforeseen bug due to a type-error.
With the latest version, gone are the days of type-riskiness, buggy code, and sleepless nights; as `hooked-on-js` has been completely
rewritten in TypeScript!

<a href="examples">
**Examples 📝**
</a>
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
