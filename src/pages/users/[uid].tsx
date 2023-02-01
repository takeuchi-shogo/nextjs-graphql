import { NextPage } from "next";
import { useRouter } from "next/router";

const UserId: NextPage = () => {
	const router = useRouter()

	const handleClick = () => {
		console.log('クリックされました')
	}
	return (
		<div>
			{ router.query.id }番目のユーザーです

			<button onClick={ handleClick }>Click!!!</button>
		</div>
	)
}

export default UserId
