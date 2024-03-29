import { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "../../components/layout/MainLayout";
import { PrivateLayoutGuard } from "../../components/layout/PrivateLayoutGuard";
import { PrivateLayout } from "../../components/layout/PrivateLayout";
import { SideNavigationContainer } from "../../components/layout/SideNavigationContainer";
import { SettingMenuBar } from "../../features/settings/ui/SettingMenuBar";
import { PrivateContents } from "../../components/layout/PrivateContents";

const Settings: NextPage = () => {
	return (
		<>
			<Head>
				<title>Setting Page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<PrivateLayoutGuard>
					<PrivateLayout>
						<SideNavigationContainer/>
						<PrivateContents>
							<SettingMenuBar />
							<h1>設定ページ</h1>
						</PrivateContents>
					</PrivateLayout>
				</PrivateLayoutGuard>
			</MainLayout>
		</>
	)
}

export default Settings
