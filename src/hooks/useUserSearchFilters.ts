import { ApolloError } from "@apollo/client"
import { UserSearchFilters, useCreateUserSearchFiltersMutation, useUpdateUserSearchFiltersMutation, useUserSearchFiltersQuery } from "../graphql/graphql"

// type UserSearchFilterOutput = {
// 	loading: boolean
// 	error?: ApolloError
// 	data?: UserSearchFilters
// }

export const useUserSearchFilters = () => {
	const { data } = useUserSearchFiltersQuery()
	return data?.user_search_filters
}

export const useCreateUserSearchFilters = () => {
	const [add, { data, loading, error }] = useCreateUserSearchFiltersMutation()
	return {add, data, loading, error }
}

export const useUpdateUserSearchFilters = () => {
	const [update, { data, loading, error }] = useUpdateUserSearchFiltersMutation()
	return {update, data, loading, error }
}
