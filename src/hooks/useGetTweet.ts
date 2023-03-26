import { useTweetQuery } from "../graphql/graphql"

export const useGetTweet = (id: string) => {
	const { data, error } = useTweetQuery({
		variables: {
			id: id,
		}
	})

	return data?.tweet
}
