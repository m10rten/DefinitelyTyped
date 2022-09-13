export declare class VListener {
    private arraySet;
    register(args: Array<{
        array: Array<any>;
        callback: <T = any>(value: T) => boolean;
        options?: {
            condition?: boolean;
            strict?: boolean;
        };
    }>): void;
    remove(args: Array<{
        array: Array<any>;
    }>): void;
    getNrOfListeners(): number;
}
export default VListener;
