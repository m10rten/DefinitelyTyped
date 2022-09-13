import { allTypes } from "./enums/type";
import { Falsy } from "./isFalsy";
export declare function isFalsyExtended<T>(value: allTypes<T>): value is FalsyExtended;
export declare type FalsyExtended = null | undefined | 0 | "" | false | -0 | [] | Record<string, unknown> | (() => Falsy);
export default isFalsyExtended;
