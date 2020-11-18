import isType from './type';

export const isRegExp = (x) => isType(x, 'RegExp');

export default isRegExp;
