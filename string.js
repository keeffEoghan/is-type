import { type } from './type';

export const isString = (x) => type(x) === 'String';

export default isString;
