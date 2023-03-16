import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const UserProfileItemLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="px-6">
			{ children }
		</div>
	)
}
