import { ApolloError, ApolloServer, Config, gql } from "apollo-server-micro";
import {
	ApolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core'
import { NextApiRequest, NextApiResponse } from 'next'

const typeDefs: Config['typeDefs'] = gql`
	type Query {
		statuses: [Status]!
		status(id: ID!): Status
	}

	type Status {
		id: String!
		body: String!
		author: String!
		createdAt: String!
	}
`

const resolvers: Config['resolvers'] = {
	Query: {
		statuses() {
			return listStatuses()
		},
		status(_parent, args) {
			return getStatus(args?.id) ?? null
		}
	},
}

const listStatuses = (): Status[] => statuses
const getStatus = (id: string): Status | undefined =>
	statuses.find((d) => d.id === id)

type Status = { id: string; body: string; author: string; createdAt: string }
const statuses: Status[] = [
	{
		id: '2',
		body: 'test user no.2',
		author: 'tanaka taro',
		createdAt: '197870875345',
	},
	{
		id: '1',
		body: 'test user no.1',
		author: 'suzuki ichiro',
		createdAt: '1276576892',
	},
]


export const config = {
	api: {
		bodyParser: false,
	},
}


const isDevelopment = process.env.NODE_ENV === 'development'
const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: isDevelopment,
	plugins: [
		isDevelopment
			? ApolloServerPluginLandingPageGraphQLPlayground()
			: ApolloServerPluginLandingPageDisabled(),
	],
})

const startServer = apolloServer.start()
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await startServer
	await apolloServer.createHandler({
		path: '/api/graphql',
	})(req, res)
}
