import { Context, Schema } from 'koishi';
export declare const sleep: (ms: number) => Promise<void>;
export declare const name = "driving-test";
export interface Config {
}
export declare const Config: Schema<Config>;
export declare function apply(ctx: Context): void;
