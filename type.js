const [{ length: start}, { length: end }] = '[object {type}]'.split('{type}');

/**
 * Gives the type of a given input.
 *
 * @see https://stackoverflow.com/a/17772086/716898
 *
 * @param {*} x Any input to test.
 *
 * @returns {string} The type of `x`.
 */
export const type = (x) => toString.call(x).slice(start, -end);

/**
 * Check whether a given input is of the given type.
 *
 * @param {string} type A type to test for.
 * @param {*} x Any input to test.
 *
 * @returns {boolean} Whether the given input `x` is of the given `type`.
 */
export const isType = (type, x) => type(x) === type;

export default type;
