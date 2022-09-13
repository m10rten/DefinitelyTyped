import { allTypes } from "./enums/type";
export declare function isFalsy<T>(value: allTypes<T>): value is Falsy;
export declare type Falsy = null | undefined | 0 | "" | false | -0;
export default isFalsy;
