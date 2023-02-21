import { useState } from "react"
import Link from "next/link"
import { Alert } from "../../../../components/ui/Alert"
import { useLoginMutation } from "../../../../graphql/graphql"
import { useRouter } from "next/router"


let errorMessage: string = ''
// let isError: boolean = false

export const LoginForm:React.FC = () => {

	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [isError, setIsError] = useState(false)

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

	const [login, {data, loading, error}] = useLoginMutation()

	const handleLogin = async () => {
		errorMessage = ''
		setIsError(false)
		if (email == '') {
			errorMessage = 'email is empty'
			setIsError(true)
			return
		}
		if (password == '') {
			errorMessage = 'password is empty'
			setIsError(true)
			return
		}
		login({
			variables: {
				login: {
					email: email,
					password: password,
				},
			}
		})
		router.push('home')
	}

	return (
		<form className="my-10">
			{ isError&& (<Alert message={ errorMessage }/>) }
			{ error && error?.graphQLErrors.map(({ message }, i) => (
				<div key={i}>
					<Alert message={ message }/>
				</div>
			))}
			<div className="flex flex-col space-y-5">
				<div className="relative z-0 w-full mb-6 group">
					<input
						type="email"
						name="floating_email"
						id="floating_email"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
						placeholder=" "
						required
						onChange={ onChangeEmail }
					/>
					<label
						htmlFor="floating_email"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email address
					</label>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<input
						type="password"
						name="floating_password"
						id="floating_password"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
						placeholder=" "
						required
						onChange={ onChangePassword }
					/>
					<label
						htmlFor="floating_email"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Password
					</label>
				</div>
				<div className="flex flex-row justify-between">
					<div>
						<label htmlFor="remember" className="">
							<input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
							Remember me
						</label>
					</div>
					<div>
						<Link href="/forgot_password" className="font-medium text-indigo-600">Forgot Password?</Link>
					</div>
				</div>
				<button onClick={ handleLogin } type="button" className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
					</svg>
					{ loading && (<span>Login...</span>) }
					{ !loading && (<span>Sign in</span>) }
				</button>
				<p className="text-center">Not registered yet? 
					<Link href="/signup" className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
						<span>Register now </span>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</span>
					</Link>
				</p>
			</div>
		</form>
	)
}
