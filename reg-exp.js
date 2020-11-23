import { type } from './type';

export const isRegExp = (x) => type(x) === 'RegExp';

export default isRegExp;
