import { useUserQuery } from "../../../graphql/graphql"

interface Props {
	id: string
}

export const SingleLayout: React.FC<Props> = ({ id }) => {

	const { data, loading, error } = useUserQuery({
		variables: { id: id }
	})

	if (loading) return <p>Now Loading .....</p>
	if (error) return <p className='font-bold text-3xl'>error</p>

	const handleClick = () => {
		console.log('クリックされました')
	}

	return (
		<>
			{ data?.user.id }番目のユーザーです

			<button type="button" onClick={ handleClick }>Click!!!</button>
			<div>ユーザー名{ data?.user.display_name }</div>
			<div>このユーザーのUUIDは{ data?.user.uuid }</div>
		</>
	)
}
