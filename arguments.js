import { type } from './type';

export const isArguments = (x) => (type(x) === 'Arguments');

export default isArguments;
