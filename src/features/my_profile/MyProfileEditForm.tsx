import { ReactNode, useState } from "react"
import { useMeQuery } from "../../graphql/graphql"
import { Alert } from "../../components/ui/Alert"
import { Button } from "../../components/ui/Button"

export const MyProfileEditForm: React.FC = () => {
	
	const { data, loading, error } = useMeQuery()

	const [displayName, setDisplayName] = useState('')
	const [gender, setGender] = useState('')
	const [location, setLocation] = useState('')

	const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => setDisplayName(event.target.value)
	const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => setGender(event.target.value)
	const onChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)

	if (loading) return <div>Loading...</div>
	if (error) return <div>{ error && error?.graphQLErrors.map(({ message }, i) => (
		<div key={i}>
			<Alert message={ message }/>
		</div>
	))}</div>

	const save = () => {
		console.log(displayName, gender, location)
	}

	return (
		<form>
			<div>
				<div className="pt-3">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="floating_email"
							id="floating_email"
							value={ data?.me.display_name }
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
							placeholder=" "
							required
							onChange={ onChangeDisplayName }
						/>
						<label
							htmlFor="floating_email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Display name
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<select
							onChange={ onChangeGender }
							id="floating_gender"
							name="floating_gender"
							value={ data?.me.gender }
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
						>
							<option value="M">男性</option>
							<option value="F">女性</option>
							<option value="O">その他</option>
						</select>
						{/* <input
							type="email"
							name="floating_email"
							id="floating_email"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
							placeholder=" "
							required
							onChange={ onChangeGender }
						/> */}
						<label
							htmlFor="floating_email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Gender
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="floating_email"
							id="floating_email"
							value={ data?.me.location }
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
							placeholder=" "
							required
							onChange={ onChangeLocation }
						/>
						<label
							htmlFor="floating_email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Location
						</label>
					</div>
				</div>
				<Button variant="primary" size="md" onClick={ save }>
					保存する
				</Button>
			</div>
		</form>
	)
}
