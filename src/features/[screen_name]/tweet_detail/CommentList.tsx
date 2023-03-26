interface Props {
	children: React.ReactNode
}

export const CommentList: React.FC<Props> = ({ children }) => {
	return (
		<div>
			{/* Comment List */}
			{ children }
		</div>
	)
}
