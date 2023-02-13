import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../../components/navigation";
import styles from "../../styles/Users.module.css"
import User from "../../models/users";
import { Users, UsersQuery } from "../../graphql/graphql";
import { gql, useQuery } from "@apollo/client";

const users_query = gql`
	query {
		users {
			id
			display_name
		}
	}
`


const Users: NextPage = () => {
	const { data, loading, error } = useQuery<UsersQuery>(users_query)

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
					{ data?.users.map((users: Users) => (
						<li className="font-semibold text-sm" key={ users.id }>
							id: { users.id } name: { users.display_name }
						</li>
					))}
				</ul>
				<Navigation/>
			</main>
		</div>
	)
}

export default Users