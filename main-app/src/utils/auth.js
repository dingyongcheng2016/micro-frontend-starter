import Cookies from 'js-cookie'
import Config from '@/settings'
import store from '@/store'
import router from '@/router/routers'

const TokenKey = Config.TokenKey

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: Config.tokenCookieExpires })
  } else return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export async function logout(redirect) {
  await store.dispatch('user/logout')
  router.push(`/login${redirect ? `?redirect=${redirect}` : ''}`)
}
