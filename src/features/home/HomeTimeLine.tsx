import Link from "next/link"
import { HomeQuery } from "../../graphql/graphql"

interface Props {
	data: HomeQuery | undefined
}

interface TweetCardProps {
	id: string
	text: string
	display_name: string
	screen_name: string
	format_created_at: string
	like_cnt: number
	comment_cnt: number
}

const TweetCard: React.FC<TweetCardProps> = ({
	id,
	text,
	display_name,
	screen_name,
	format_created_at,
	like_cnt,
	comment_cnt
}) => (
	<div key={ id } className="bg-white shadow-lg rounded-lg w-full">
		{/* <!--horizantil margin is just for display--> */}
		<div className="items-start px-4 py-6">
			<div className="">
				<div className="flex items-center justify-between">
					<div className="flex space-x-4">
						<div>
							{/* user icon image */}
							<img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="/assets/young-gals.jpg" alt="avatar"/>
						</div>
						<div>
							<h2 className="text-lg font-semibold text-zinc-800 -mt-1">{ display_name }</h2>
							<span className="text-sm font-light text-gray-600">{ screen_name }</span>
						</div>
					</div>
					<small className="text-sm text-gray-700">22h ago</small>
				</div>
				<p className="text-zinc-800 font-light">{ format_created_at }</p>
				<p className="mt-3 text-gray-700 text-sm">
					{ text }
				</p>
				<div className="mt-4 flex items-center">
					<div className="flex text-gray-700 text-sm mr-8">
						<svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
						</svg>
						<span>{ comment_cnt }</span>
					</div>
					<div className="flex text-gray-700 text-sm mr-3">
						<svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
							</svg>
						<span>{ like_cnt }</span>
					</div>
					<div className="flex text-gray-700 text-sm mr-4">
						<svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
							</svg>
						<span>share</span>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export const HomeTimeLine: React.FC<Props> = ({ data }) => {

	return (
		<>
			<div className="space-y-4">
				{ data?.home.tweets?.map((tweet) => (
					<div key={ tweet.id }>
						<Link key={ tweet.id } href={`/${ tweet.user.screen_name }/tweets/${ tweet.id }` }>
							<TweetCard
								id={ tweet.id }
								text={ tweet.text }
								display_name={ tweet.user.display_name }
								screen_name={ tweet.user.screen_name }
								format_created_at={ tweet.format_created_at }
								like_cnt={ tweet.like_cnt }
								comment_cnt={ tweet.comment_cnt }
							/>
						</Link>
					</div>
				))}
			</div>
		</>
	)
}
