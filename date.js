import { type } from './type';

export const isDate = (x) => type(x) === 'Date';

export default isDate;
