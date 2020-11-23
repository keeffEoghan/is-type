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

export default type;
