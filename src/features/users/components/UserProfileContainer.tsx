import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const UserProfileContainer: React.FC<Props> = ({ children }) => {
	return (
		<div className="space-y-5">
			{ children }
		</div>
	)
}
