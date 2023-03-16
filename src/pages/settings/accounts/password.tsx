import { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "../../../components/layout/MainLayout";
import { PrivateLayoutGuard } from "../../../components/layout/PrivateLayoutGuard";
import { PrivateLayout } from "../../../components/layout/PrivateLayout";
import { SideNavigationContainer } from "../../../components/layout/SideNavigationContainer";
import { SettingMenuBar } from "../../../features/settings/ui/SettingMenuBar";
import { PrivateContents } from "../../../components/layout/PrivateContents";
import { PasswordUpdater } from "../../../features/settings/accounts/PasswordUpdater";

const SettingAccountEmail: NextPage = () => {
	return (
		<>
			<Head>
				<title>Email Edit Page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<PrivateLayoutGuard>
					<PrivateLayout>
						<SideNavigationContainer/>
						<PrivateContents>
							<SettingMenuBar />
							<PasswordUpdater />
						</PrivateContents>
					</PrivateLayout>
				</PrivateLayoutGuard>
			</MainLayout>
		</>
	)
}

export default SettingAccountEmail
