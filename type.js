/**
 * Check whether a given input is of the given type.
 *
 * @see https://stackoverflow.com/a/17772086/716898
 *
 * @param {*} x Any input to test.
 * @param {string} type A type to test for.
 */
export const isType = (x, type) => toString.call(x) === `[object ${type}]`;

export default isType;
