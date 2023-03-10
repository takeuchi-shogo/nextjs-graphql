import { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "../../components/layout/MainLayout";
import { PrivateLayoutGuard } from "../../components/layout/PrivateLayoutGuard";
import { PrivateLayout } from "../../components/layout/PrivateLayout";
import { SideNavigationContainer } from "../../components/layout/SideNavigationContainer";

const Messages: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Message List</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<PrivateLayoutGuard>
					<PrivateLayout>
						<SideNavigationContainer/>
						<div>
							メッセージ一覧ページ
						</div>
					</PrivateLayout>
				</PrivateLayoutGuard>
			</MainLayout>
		</div>
	)
}


export default Messages
