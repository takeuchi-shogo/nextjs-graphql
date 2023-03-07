import { NextPage } from "next";
import { useRouter } from "next/router";
import { SingleLayout } from "../../features/users/components/SingleLayout";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { PrivateLayoutGuard } from "../../components/layout/PrivateLayoutGuard";
import { PrivateLayout } from "../../components/layout/PrivateLayout";
import { SideNavigationContainer } from "../../components/layout/SideNavigationContainer";

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
		<MainLayout>
			<PrivateLayoutGuard>
				<PrivateLayout>
					<SideNavigationContainer/>
					<SingleLayout
						id={ paramsId }
					/>
				</PrivateLayout>
			</PrivateLayoutGuard>
		</MainLayout>
	)
}

export default UserId
