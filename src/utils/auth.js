/**
 * 弃用
 */
import { setStore, getStore, clearStore } from '@/utils/storage'

export const tokenKey = 'Access-Token'

export function getToken () {
  return getStore(tokenKey)
}

export function setToken (token) {
  // key, token, timeout = 86400s
  return setStore(tokenKey, token, 86400)
}

export function removeToken () {
  return clearStore(tokenKey)
}
