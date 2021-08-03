// import For from '../lib/For'

const useFor = (
  initialization: number, 
  condition: (n: number) => boolean, 
  updation: (n: number) => number, 
  fn: (n: number) => void
): void => {
  if(condition(initialization)) {
    fn(initialization)
    useFor(updation(initialization), condition, updation, fn)
  }
  return
}

const useIf = (
  condition: boolean | (() => boolean),
  fn: () => void,
  catchFn?: () => void
): void => {
  if(typeof condition === 'function') {
    if(condition()) {
      fn()
    } else {
      if(catchFn) {
        catchFn()
      }
    }
  } else {
    if(condition) {
      fn()
    } else {
      if(catchFn) {
        catchFn()
      }
    }
  }
}

let i = 0
useFor(i, i => i < 10, i => ++i, i => {
  useIf(() => i % 2 === 0, () => {
    console.log("In 'For' loop: ", i)
  })
})
