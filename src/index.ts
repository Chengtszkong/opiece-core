/**
 * @description: 求和函数
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a: number, b: number): number | null {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a + b;
}

export {
    sum
}