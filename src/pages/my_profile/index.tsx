import { NextPage } from "next"
import Head from "next/head"
import { MyProfileLayout } from "../../features/my_profile/MyProfleLayout"
import { MyAccountEditForm } from "../../features/my_profile/MyAccountEditForm"
import { MyProfileEditForm } from "../../features/my_profile/MyProfileEditForm"
import { SideNavigationContainer } from "../../components/layout/SideNavigationContainer"
import { MainLayout } from "../../components/layout/MainLayout"
import { PrivateLayoutGuard } from "../../components/layout/PrivateLayoutGuard"
import { PrivateLayout } from "../../components/layout/PrivateLayout"

const MyProfile: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Verify Email</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<PrivateLayoutGuard>
					<PrivateLayout>
						<SideNavigationContainer/>
						<MyProfileLayout>
							<MyProfileEditForm />
							{/* <MyAccountEditForm /> */}
						</MyProfileLayout>
					</PrivateLayout>
				</PrivateLayoutGuard>
			</MainLayout>
		</div>
	)
}

export default MyProfile
