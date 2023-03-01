import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { parseCookies, setCookie } from 'nookies'

const httpLink = createHttpLink({
	uri: "http://localhost:8080/graphql",
	// credentials: "include",
})

const jwtToken = parseCookies()

const authLink = new ApolloLink((operation, forward) => {

	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			Authorization: jwtToken.JWT_TOKEN ? `${jwtToken.JWT_TOKEN}` : '', // JWTをAuthorizationヘッダーに含める
		},
	}))
	return forward(operation)
})

const tokenLink = new ApolloLink((operation, forward) => {
	return forward(operation).map((response) => {
		const context = operation.getContext()
		// const { response: { headers } } = context
		if (context.response.headers) {
			const jwtToken = context.response.headers.get('authorization')
			if (jwtToken) {
				setCookie(null, 'JWT_TOKEN', jwtToken, {
					maxAge: 1 * 24 * 60 * 60, // 30 days
					path: '/',
				})
			}
		}
		return response
	})
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
	  graphQLErrors.forEach(({ message, locations, path }) =>
		console.log(
		  `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
		)
	  );
	if (networkError) console.log(`[Network error]: ${networkError}`);
  });

const link = ApolloLink.from([
	authLink,
	tokenLink,
	errorLink,
	httpLink
])

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "http://localhost:8080/graphql",
	link: link,
})

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ApolloProvider client={ client }>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
