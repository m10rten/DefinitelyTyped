import { allTypes } from "./enums/type";
export declare function isNullish<T>(value: allTypes<T>): value is null | undefined;
export default isNullish;
