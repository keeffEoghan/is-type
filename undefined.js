import { type } from './type';

export const isUndefined = (x) => (type(x) === 'Undefined');

export default isUndefined;
