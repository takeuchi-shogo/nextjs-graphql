import { useCreateTweetMutation } from "../../graphql/graphql"
import { TweetRegister } from "./TweetRegister"

interface Props {
	children: React.ReactNode
}

export const HomeLayout: React.FC<Props> = ({ children }) => {

	const [create, { data, loading, error }] = useCreateTweetMutation()

	const createTweet = async (text: string) => {
		try {
			create({
				variables: {
					text: text
				}
			})
		} catch {
			console.log(error)
		}
	}

	return (
		<div className="w-full mx-4">
			<div className="max-w-2xl">
				<h1 className='mx-auto text-3xl'>
					Hello, Home Page!!!
				</h1>
				<p>ほ〜〜むです</p>
				<TweetRegister
					onClickCreateTweet={ createTweet }
				/>
				{ children }
			</div>
		</div>
	)
}
