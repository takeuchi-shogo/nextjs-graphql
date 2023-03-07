import { Button } from "../../../components/ui/Button"
import { useCreateLikeMutation } from "../../../graphql/graphql"

interface Props {
	id: string,
	is_like: boolean | null | undefined,
}

export const UserLikeButton: React.FC<Props> = ({ id, is_like }) => {

	const [addLike, { data, loading, error }] = useCreateLikeMutation()

	const handleClick = () => {
		console.log('クリックされました')
		addLike({
			variables: {
				like: {
					receive_user_id: Number(id),
				}
			}
		})
	}

	return (
		<>
			<Button
				variant="primary"
				size="md"
				onClick={ handleClick }
			>
				{is_like ? 'いいね済み' : 'いいね　♡' }
			</Button>
		</>
	)
}
