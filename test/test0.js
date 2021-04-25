import { For } from '../lib/For'

let i = 0
For(i, i => i < 10, i => ++i, i => {
  console.log("In 'For' loop: ", i)
})
