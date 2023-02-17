import { useQuery } from '@apollo/client'
import { gql } from 'apollo-server-micro'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/navigation'
import styles from '../styles/Home.module.css'
import { Header } from '../components/ui/Header'

type Props = {
	todos: {
		id: number
		text: string
		done: boolean
		// title: string
	}[]
}

const get_todo = gql`
	query Todos {
		todos {
			id
			text
			done
		}
	}
`


const Home: NextPage<Props> = (props) => {
	// const { data, loading, error } = useQuery(get_todo)

	// console.log(data)

	// if (loading) return <p>Now Loading .....</p>
	// if (error) return <p className='font-bold text-3xl'>error</p>

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<h1 className='text-3xl'>
					Hello, GraphQL!!!
				</h1>
				{/* <ul className={ styles.grid }>
					{ data.todos.map((todo: Todo) => (
						<li className={ styles.title } key={ todo.id }>
							id: { todo.text } done: { todo.done }
						</li>
					))}
				</ul> */}

				<Navigation/>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}


export default Home
