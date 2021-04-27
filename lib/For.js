/**
 * A JavaScript For loop.
 * @param {Number} initialization The loop's initial condition
 * @param {Function} condition The loop's terminating condition to check each iteration
 * @param {Function} updation The function to increment the loop's counter
 * @param {Function} fn The function to call on each iteration
 * @module
 */
export default For = (initialization, condition, updation, fn) => {
  if(condition(initialization)) {
    fn(initialization)
    For(updation(initialization), condition, updation, fn)
  }
  return
}
