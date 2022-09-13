import { allTypes } from "../types/enums/type";
export declare function isDeepMatch<T>(val1: allTypes<T>, val2: allTypes<T>): boolean | Promise<boolean>;
export default isDeepMatch;
