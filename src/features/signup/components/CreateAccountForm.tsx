import { useState } from "react"

interface Props {
	handleCreateAccount: (displayName: string) => void
}

export const CreateAccountForm: React.FC<Props> = ({ handleCreateAccount }) => {
	const [displayName, setDisplayName] = useState('')

	const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => setDisplayName(event.target.value)

	return (
		<form className="my-10">
			<div className="flex flex-col space-y-5">
				<div className="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_display_name"
						id="floating_display_name"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
						placeholder=" "
						required
						onChange={ onChangeDisplayName }
					/>
					<label
						htmlFor="floating_display_name"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Display name
					</label>
				</div>
				<button onClick={ () => handleCreateAccount(displayName) } type="button" className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
					</svg>
					<span>Next set password</span>
				</button>
			</div>
		</form>
	)
}
