import { isType } from './type';

export const isFunction = (x) => isType('Function', x);

export default isFunction;
