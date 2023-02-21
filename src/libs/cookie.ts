import { destroyCookie, parseCookies, setCookie } from "nookies"

export const setToken = (name: string, token: string) => {
	setCookie(null, name, token, {
		maxAge: 7 * 24 * 60 * 60, // 30 days
		path: '/',
	})
}

export const getCookies = () => {
	return parseCookies()
}

export const destroyToken = (name: string) => {
	destroyCookie(null, name)
}
