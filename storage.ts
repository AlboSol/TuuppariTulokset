/**
 * Simple local storage wrapper (web).
 * Replace with IndexedDB/SQLite later if needed.
 */
export const storage = {
  async get<T = any>(key: string): Promise<T | null> {
    return JSON.parse(localStorage.getItem(key) || "null");
  },
  async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
