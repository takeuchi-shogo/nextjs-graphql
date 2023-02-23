import { NextPage } from "next";
import { useRouter } from "next/router";
import { SingleLayout } from "../../features/users/components/SingleLayout";
import { useEffect, useState } from "react";

const UserId: NextPage = () => {
	const router = useRouter()
	const [paramsId, setParamsId] = useState('')

	useEffect(() => {
		if (router.isReady) {
			let uid = router.query.uid
			setParamsId(uid as string)
		}
	}, [ router ])

	return (
		<div>
			<SingleLayout
				id={ paramsId }
			/>
		</div>
	)
}

export default UserId
