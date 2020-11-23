import { isType } from './type';

export const isRegExp = (x) => isType('RegExp', x);

export default isRegExp;
