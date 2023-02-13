import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";

const get_user = gql`
	query User($id: ID!) {
		user(id: $id) {
			id
			name
			# password
		}
	}
`

const UserId: NextPage = () => {
	const router = useRouter()
	let id = router.query.uid
	const { data, loading, error } = useQuery(get_user, {
		variables: { id },
	})

	if (loading) return <p>Now Loading .....</p>
	if (error) return <p className='font-bold text-3xl'>error</p>


	const handleClick = () => {
		console.log('クリックされました')
	}
	return (
		<div>
			{ router.query.id }番目のユーザーです

			<button onClick={ handleClick }>Click!!!</button>
			<div>{ data.user.name }</div>

		</div>
	)
}

export default UserId
