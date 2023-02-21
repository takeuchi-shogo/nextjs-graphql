import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, Observable } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { setToken, getCookies } from '../libs/cookie';

const httpLink = createHttpLink({
	uri: "http://localhost:8080/query",
	// credentials: "include",
})


const authLink = new ApolloLink((operation, forward) => {
	const jwtToken = getCookies()
	operation.setContext(({ headers = {} }) => ({
		headers: {
		...headers,
		Authorization: jwtToken ? `Bearer ${jwtToken.JWT_TOKEN}` : '', // JWTをAuthorizationヘッダーに含める
		},
	}))
	return forward(operation)
})

const tokenLink = new ApolloLink((operation, forward) => {
	return forward(operation).map((response) => {
		const context = operation.getContext()
		const { response: { headers } } = context
		console.log('jwt', headers.get('authorization'))
		if (context.response.headers) {
			const jwtToken = context.response.headers.get('authorization')
			if (jwtToken) {
				setToken('JWT_TOKEN', jwtToken)
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

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "http://localhost:8080/query",
	link: link,
})
