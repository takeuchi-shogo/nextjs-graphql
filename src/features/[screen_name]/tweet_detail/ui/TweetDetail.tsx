import { useTweetQuery } from "../../../../graphql/graphql"

interface Props {
	id: string
}

export const TweetDetail: React.FC<Props> = ({
	id
}) => {
	const { data } = useTweetQuery({
		variables: {
			id: id,
		}
	})

	return (
		<div className="flex flex-col">
			<div className="flex">
				<div>
					{/* user icon image */}
					<img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="/assets/young-gals.jpg" alt="avatar"/>
				</div>
				<div>
					{/* user data */}
					<div className="text-sm text-black font-bold">
						{ data?.tweet.user.display_name }
					</div>
					<span className="text-sm text-gray-600 font-light">
						{ data?.tweet.user.screen_name }
					</span>
				</div>
			</div>
			<div className="flex flex-col">
				{/* tweet full text */}
				<div className="pt-4">
					{ data?.tweet.text }
				</div>
				{/* created at */}
				<div className="h-12 flex items-center">
					<div className="self-center">
						{ data?.tweet.format_created_at }
					</div>
				</div>
				{/* count item */}
				<div className="h-12 flex items-center">
					<div className="flex text-gray-700 text-sm mr-8">
						<svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
						</svg>
						<span>{ data?.tweet.comment_cnt }</span>
					</div>
					<div className="flex text-gray-700 text-sm mr-3">
						<svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
							</svg>
						<span>{ data?.tweet.like_cnt }</span>
					</div>
				</div>
				{/* button group */}
				<div className="h-12">

				</div>
			</div>
		</div>
	)
}
