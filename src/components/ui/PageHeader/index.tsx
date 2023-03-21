interface Props {
	children: React.ReactNode
}

export const PageHeader: React.FC<Props> = ({ children }) => {
	return (
		<div className="py-6">
			{ children }
		</div>
	)
}
