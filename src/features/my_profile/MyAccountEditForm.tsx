import { useState } from "react"
import { Alert } from "../../components/ui/Alert"
import { Button } from "../../components/ui/Button"

export const MyAccountEditForm = () => {

	// const { data, loading, error } = 

	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)
	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

	// if (loading) return <div>Loading...</div>
	// if (error) return <div>{ error && error?.graphQLErrors.map(({ message }, i) => (
	// 	<div key={i}>
	// 		<Alert message={ message }/>
	// 	</div>
	// ))}</div>
	// if (data && !error) {
	// 	console.log(data)
	// 	// setDisplayName(data.me.display_name)
	// 	// setGender(data.me.gender)
	// 	// setLocation(data.me.location)
	// }

	const saveAccount = () => {
		console.log(phoneNumber, email, password)
	}

	return (
		<form className="w-full">
			<div>
				<div className="pt-3">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="tel"
							name="floating_tel"
							id="floating_tel"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
							placeholder=" "
							required
							onChange={ onChangePhoneNumber }
						/>
						<label
							htmlFor="floating_tel"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Phone Number
						</label>
					</div>
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
							Email Address
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
							htmlFor="floating_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Password
						</label>
					</div>
				</div>
				<Button variant="primary" size="md" onClick={ saveAccount }>保存する</Button>
			</div>
		</form>
	)
}
