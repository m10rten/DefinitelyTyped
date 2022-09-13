import { allTypes } from "../types/enums/type";
export declare function isValidPassword<T>(value: allTypes<T>, options?: {
    minLength?: number;
    numbers?: number;
    specialChars?: number;
    maxLength?: number;
}): boolean;
export default isValidPassword;
