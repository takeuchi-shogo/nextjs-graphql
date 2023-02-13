import { useState } from "react"

export const SignupForm = () => {

	const [displayName, setDisplayName] = useState('')
	const [screenName, setScreenName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
	const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => setDisplayName(event.target.value)
	const onChangeScreenName = (event: React.ChangeEvent<HTMLInputElement>) => setScreenName(event.target.value)
	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)


	const handleSignup = () => {
		const _params = {
			displayName: displayName,
			screenName: screenName,
			email: email,
			password: password,
		}
		console.log(_params)
	}

	return (
		<form className="my-10">
			<div className="flex flex-col space-y-5">
				<div>
					<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Display Name</label>
					<input
						type="text"
						placeholder="display name"
						className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						onChange={ onChangeDisplayName }
					/>
				</div>
				<div>
					<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Screen Name</label>
					<input
						type="text"
						placeholder="screen name"
						className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						onChange={ onChangeScreenName }
					/>
				</div>
				<div>
					<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
					<input
						type="text"
						placeholder="email"
						className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						onChange={ onChangeEmail }
					/>
				</div>
				<div>
					<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
					<input
						type="password"
						placeholder="password"
						className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						onChange={ onChangePassword }
					/>
				</div>
				<button onClick={ handleSignup } type="button" className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
					</svg>
					<span>Account Register</span>
				</button>
			</div>
		</form>
	)
}
