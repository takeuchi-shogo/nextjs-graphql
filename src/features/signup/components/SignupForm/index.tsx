import { gql, useMutation } from "@apollo/client"
import { useState } from "react"
import { CreateAccountAndUserMutation, useCreateAccountAndUserMutation, useCreateVerifyEmailMutation } from "../../../../graphql/graphql"
import { useRouter } from "next/router"
import { VerifyEmailForm } from "../VerifyEmailForm"
import { Alert } from "../../../../components/ui/Alert"
import { CreateAccountForm } from "../CreateAccountForm"
import { SetPassword } from "../SetPasswordForm"


const create_account_and_user = gql`
	mutation CreateAccountAndUser($account: NewAccount!, $user: NewUsers!) {
		createAccountAndUser(account: $account, user: $user) {
			# account {
			# 	email
			# 	password
			# }
			user {
				display_name
				# screen_name
				# gender
				# location
			}
		}
	}
`

export const SignupForm:React.FC = () => {

	const router = useRouter()

	const [isVerifyEmail, setIsVerifyEmail] = useState(true)
	const [isCreateAccount, setIsCreateAccount] = useState(false)
	const [isPassword, setIsPassword] = useState(false)

	const [errorMessage, setErrorMessage] = useState('')

	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [code, setCode] = useState('')

	const onCode = (event: React.ChangeEvent<HTMLInputElement>) => setCode(event.target.value)

	const [addAccountAndUser, { data, loading, error }] = useCreateAccountAndUserMutation()
	// const [createVerifyEmailMutation, { data }] = useCreateVerifyEmailMutation()

	const showVerifyEmailForm = () => {
		setIsVerifyEmail(true)
		setIsCreateAccount(false)
		setIsPassword(false)
	}

	const showCreateAccountForm = () => {
		setIsVerifyEmail(false)
		setIsCreateAccount(true)
		setIsPassword(false)
	}

	const showPasswordForm = () => {
		setIsVerifyEmail(false)
		setIsCreateAccount(false)
		setIsPassword(true)
	}

	const handleVerifyEmail = (emailInput: string) => {
		if (emailInput == '') {
			setErrorMessage('メールアドレスが空です')
			return
		}
		setEmail(emailInput)
		showCreateAccountForm()
	}

	const handleConfirmPinCode = (pinCode: string) => {
		if (pinCode) {
			setErrorMessage('コードが一致しません')
			return
		}
		
	}

	const handleCreateAccount = (displayNameInput: string) => {
		console.log(displayNameInput)
		setDisplayName(displayNameInput)
		showPasswordForm()
	}

	const handleSetPassword = (passwordInput: string, confirmPasswordInput: string) => {
		if (passwordInput != confirmPasswordInput) {
			setErrorMessage('password is required')
			return
		}
		setPassword(passwordInput)
		addAccountAndUser({
			variables: {
				account: {
					phone_number: '',
					email: email,
					password: password,
				},
				user: {
					display_name: displayName,
					screen_name: 'test',
					gender: 'N',
				}
			}
		})
	}

	const Status = () => {
		if (loading) return <p>Loading....</p>
		if (error) return <p>error</p>
		if (!data) return null
		return <p>登録が完了しました</p>
	}

	return (
		<>
			{ errorMessage != '' &&(<Alert message={ errorMessage }/>) }
			{ isVerifyEmail && (
				<div>
					<VerifyEmailForm
						handleVerifyEmail={ handleVerifyEmail }
					/>
				</div>
			) }
			{ isCreateAccount && (
				<div>
					<CreateAccountForm
						handleCreateAccount={ handleCreateAccount }
					/>
				</div>
			) }
			{ isPassword && (
				<div>
					<SetPassword
						handleSetPassword={ handleSetPassword }
					/>
				</div>
			) }
			<Status/>
		</>
	)
}
