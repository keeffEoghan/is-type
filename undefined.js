import { isType } from './type';

export const isUndefined = (x) => isType('Undefined', x);

export default isUndefined;
