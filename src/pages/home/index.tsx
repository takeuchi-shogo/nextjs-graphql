import { NextPage } from "next";
import Head from "next/head";
import { SideNavigationContainer } from "../../components/layout/SideNavigationContainer";

export const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex">
				<SideNavigationContainer/>
				<div className="mx-auto max-w-7xl px-4 py-3">
					<h1 className='mx-auto text-3xl'>
						Hello, Home Page!!!
					</h1>
					<p>ほ〜〜むです</p>
				</div>
			</main>
		</div>
	)
}

export default Home
