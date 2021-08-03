/**
 * A JavaScript For loop.
 * @param {Number} initialization The loop's initial condition
 * @param {Function} condition The loop's terminating condition to check each iteration
 * @param {Function} updation The function to increment the loop's counter
 * @param {Function} fn The function to call on each iteration
 * @module
 */
export default (
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
