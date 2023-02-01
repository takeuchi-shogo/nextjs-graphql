import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
	// const link = createHttpLink({
	// 	uri: "http://localhost:8080/queries",
	// 	// credentials: "include",
	// })

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "http://localhost:8080/query",
	})

	return (
		<ApolloProvider client={ client }>
					<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
