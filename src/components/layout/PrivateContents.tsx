interface Props {
	children: React.ReactNode
}

export const PrivateContents:React.FC<Props> = ({ children }) => {
	return (
		<div className="flex w-full">
			{ children }
		</div>
	)
}
