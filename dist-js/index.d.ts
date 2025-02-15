import { UnlistenFn } from "@tauri-apps/api/event";

export interface WatchOptions {
	recursive?: boolean;
}
export interface DebouncedWatchOptions extends WatchOptions {
	delayMs?: number;
}
export type RawEvent = {
	type: RawEventKind;

	paths: string[];

	attrs: unknown;
};
type RawEventKind =
	| "any "
	| {
			access?: unknown;
	  }
	| {
			create?: unknown;
	  }
	| {
			modify?: unknown;
	  }
	| {
			remove?: unknown;
	  }
	| "other";

export type DebouncedEvent =
	| {
			kind: "Any";

			path: string;
	  }[]
	| {
			kind: "AnyContinuous";

			path: string;
	  }[];

export declare function watch(
	paths: string | string[],
	cb: (event: DebouncedEvent) => void,
	options?: DebouncedWatchOptions,
): Promise<UnlistenFn>;

export declare function watchImmediate(
	paths: string | string[],
	cb: (event: RawEvent) => void,
	options?: WatchOptions,
): Promise<UnlistenFn>;

export {};
