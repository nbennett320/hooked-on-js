export default (
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
