export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

//export let storage: Storage = asyncStorage;
//export let storage: Storage = MMKVStorage;

export let storage: Storage;

export function initiaalizeStorage(storageImpl: Storage) {
  storage = storageImpl;
}
