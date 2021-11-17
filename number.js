import { type } from './type';

export const isNumber = (x) => (type(x) === 'Number');

export default isNumber;
