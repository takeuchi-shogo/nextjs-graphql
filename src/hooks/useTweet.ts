import { useCreateTweetMutation } from "../graphql/graphql"

export const createTweet = (text: string) => {
	const [create, { data, error}] = useCreateTweetMutation()

	create({
		variables: {
			text: text
		}
	})
}
