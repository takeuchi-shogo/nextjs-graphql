interface Props {
	children: React.ReactNode
}

export const TweetDetailLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="px-4">
			<div className="flex space-x-8 my-4">
				<div>
					戻るボタンを配置予定
				</div>
				<div className="font-bold">
					Tweets Header
				</div>
			</div>
			{ children }
		</div>
	)
}
