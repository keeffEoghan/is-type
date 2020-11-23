import { type } from './type';

export const isNull = (x) => type(x) === 'Null';

export default isNull;
