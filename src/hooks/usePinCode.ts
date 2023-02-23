import { useGetVerifyEmailByPinCodeQuery } from "../graphql/graphql"

export const useConfirmPinCode = (pinCode: string) => {
	return useGetVerifyEmailByPinCodeQuery({
		variables: {
			code: pinCode,
		}
	})
}
