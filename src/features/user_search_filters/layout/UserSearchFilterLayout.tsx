interface Props {
	children: React.ReactNode,
}

export const UserSearchFilterLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-full">
			{ children }
		</div>
	)
}
