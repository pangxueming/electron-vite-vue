export * from './lang';
export * from './settings';

export function getItem(key: string) {
  return JSON.parse(window.localStorage.getItem(key) || "{}");
}

export function setItem(key: string, val: any) {
  const value = typeof val === 'object' ? JSON.stringify(val) : val;
  window.localStorage.setItem(key, value)
}

export function removeItem(key: string) {
  window.localStorage.removeItem(key);
}

export function clearAll() {
  window.localStorage.clear();
}
