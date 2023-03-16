import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const MyProfileLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-full px-4 space-y-6">
			{ children }
		</div>
	)
}
