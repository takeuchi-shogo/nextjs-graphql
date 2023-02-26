import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const MyProfileLayout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			{ children }
		</div>
	)
}
