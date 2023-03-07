import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const UserProfileItemHeader: React.FC<Props> = ({
	children,
}) => {
	return (
		<div className="my-3 text-zinc-800">
			<div className="text-sm font-bold">
				{ children }
			</div>
		</div>
	)
}
