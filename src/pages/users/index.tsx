import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../../components/navigation";
import styles from "../../styles/Users.module.css"
import { useUsersQuery } from "../../graphql/graphql";
import Link from "next/link";

const UsersPage: NextPage = () => {
	const jwtToken = 'test_sample_user'
	const { data, loading, error } = useUsersQuery({
		variables: {
			first: 10,
			after: "",
			filter: {
			  "gender": "",
			  "location": ""
			}
		  }
	})
	console.log(data)

	if (loading) return <p>Now Loading .....</p>
	if (error) return <p className='font-bold text-3xl'>error</p>

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h2 className={styles.title}>User List page</h2>

				<ul>
					{ data?.users.edges.map((users) => (
						<li className="font-semibold text-sm" key={ users.node.id }>
							<Link href={ `/users/${ users.node.id }` }>
								<div className="py-3 px-4 my-3 border rounded">
									<div className="font-semibold text-lg text-black">
										display_name: { users.node.display_name }
									</div>
									<span className="font-light text-sm text-gray-500">screen name: { users.node.screen_name }</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
				<Navigation/>
			</main>
		</div>
	)
}

export default UsersPage
