import { gql, useMutation } from "@apollo/client"
import { useState } from "react"
import { CreateAccountAndUserMutation } from "../../../../graphql/graphql"
import { useRouter } from "next/router"
import { VerifyEmailForm } from "../VerifyEmailForm"
import { Alert } from "../../../../components/ui/Alert"
import { CreateAccountForm } from "../CreateAccountForm"
import { SetPassword } from "../SetPasswordForm"


const create_user = gql`
	mutation CreateAccountAndUser($account: NewAccount!, $user: NewUsers!) {
		createAccountAndUser(account: $account, user: $user) {
			account {
				email
				password
			}
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

	const [user, { data, loading, error }] = useMutation<CreateAccountAndUserMutation>(create_user)

	const onCode = (event: React.ChangeEvent<HTMLInputElement>) => setCode(event.target.value)

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
		console.log(code)
		if (emailInput == '') {
			setErrorMessage('メールアドレスが空です')
			return
		}
		setEmail(emailInput)
		showCreateAccountForm()
	}

	const handleCreateAccount = (displayNameInput: string) => {
		console.log(displayNameInput)
		showPasswordForm()
	}

	const handleSetPassword = (passwordInput: string, confirmPasswordInput: string) => {
		console.log(passwordInput, confirmPasswordInput)
		if (passwordInput != confirmPasswordInput) {
			setErrorMessage('password is required')
			return
		}
		async () => {
			setPassword(passwordInput)
			await handleSignup()
		}
	}

	const handleSignup = async () => {
		const account = {
			email: email,
			password: password,
		}
		const user = {
			displayName: displayName,
			// screenName: screenName,
			// gender: gender,
			// location: location,
		}
		console.log(account, user)
		router.push("/home")
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
		</>
	)
}
