export const APP_KEY = "LOCAL_SESSION";

/**
 * @description Obtém um item do localStorage do aplicativo.
 * @param key A chave do item a ser recuperado.
 * @returns O valor do item no formato JSON.
 */
export function getLocalStorageItem(key: string) {
  if (typeof window === "undefined") return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  return JSON.parse(data!);
}

/**
 * @description Define um item no localStorage do aplicativo.
 * @param key A chave do item a ser definido.
 * @param value O valor a ser armazenado no item.
 */
export function setLocalStorageItem(key: string, value: unknown) {
  if (typeof window === "undefined") return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}

/**
 * @description Remove um item do localStorage do aplicativo.
 * @param key A chave do item a ser removido.
 */
export function removeLocalStorageItem(key: string) {
  if (typeof window === "undefined") return;
  return window.localStorage.removeItem(`${APP_KEY}_${key}`);
}
