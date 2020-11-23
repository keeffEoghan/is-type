import { type } from './type';

export const isFunction = (x) => type(x) === 'Function';

export default isFunction;
