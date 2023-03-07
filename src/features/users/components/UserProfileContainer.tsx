import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const UserProfileContainer: React.FC<Props> = ({ children }) => {
	return (
		<div>
			{ children }
		</div>
	)
}
