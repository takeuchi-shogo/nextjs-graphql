import { useRouter } from "next/router"
import { parseCookies } from "nookies"
import { useEffect } from "react"

interface Props {
	children: React.ReactNode
}


export const PrivateLayoutGuard: React.FC<Props> = ({ children }) => {

	const jwtToken = parseCookies()

	const router = useRouter()

	useEffect(() => {
		if (!jwtToken.JWT_TOKEN) {
			router.push('/signin')
		}
	}, [])

	return (
		<>
			{/* // Private Layout Guard - Check JWT in cookie. */}
			{ children }
		</>
	)
}
