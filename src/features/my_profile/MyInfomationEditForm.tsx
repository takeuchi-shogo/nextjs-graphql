import { ReactNode, useEffect, useState } from "react"
import { ResponseUsers, useMeQuery, useUpdateUserMutation } from "../../graphql/graphql"
import { Alert } from "../../components/ui/Alert"
import { Button } from "../../components/ui/Button"
import { FloatingInput } from "../../components/ui/Form/FloatingInput"

interface Props {
	me: any,
}

export const MyInfomationEditForm: React.FC<Props> = ({
	me
}) => {
	
	// const { data, loading, error } = useMeQuery()
	const [updateUser, { data, error }] = useUpdateUserMutation()

	const [displayName, setDisplayName] = useState('')
	const [gender, setGender] = useState('')
	const [age, setAge] = useState(0)
	const [location, setLocation] = useState('')

	const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => setDisplayName(event.target.value)
	const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => setGender(event.target.value)
	const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value))
	const onChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)

	// if (loading) return <div>Loading...</div>
	// if (error) return <div>{ error && error?.graphQLErrors.map(({ message }, i) => (
	// 	<div key={i}>
	// 		<Alert message={ message }/>
	// 	</div>
	// ))}</div>

	useEffect(() => {
		setDisplayName(me.display_name)
		setGender(me.gender)
		setAge(me.age)
		setLocation(me.location)
	},[])

	const save = () => {
		console.log(age)
		updateUser({
			variables: {
				user: {
					display_name: displayName,
					gender: gender,
					age: age,
					location: location,
				}
			}
		})
	}

	return (
		<form>
			<div>
				<div className="py-2">
					<h2 className="text-zinc-800 font-bold">ユーザー情報</h2>
				</div>
				<div className="pt-3">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="floating_email"
							id="floating_email"
							value={ displayName }
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
							value={ gender }
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
						>
							<option value="M">男性</option>
							<option value="F">女性</option>
							<option value="O">その他</option>
						</select>
						<label
							htmlFor="floating_email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Gender
						</label>
					</div>
					<div className="mb-6">
						<FloatingInput
							label={ '年齢' }
							id={ 'age' }
							type={ 'tel' }
							value={ age }
							onChangeEvent={ onChangeAge }
						/>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="floating_email"
							id="floating_email"
							value={ location }
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
					ユーザー情報を保存
				</Button>
			</div>
		</form>
	)
}
