import Head from "next/head"
import { prefectures } from "../../constants/location"
import { useState } from "react"
import { SideNavigationContainer } from "../../components/layout/SideNavigationContainer"
import { Button } from "../../components/ui/Button"
import { useRouter } from "next/router"
import { useCreateUserSearchFilters, useUpdateUserSearchFilters, useUserSearchFilters } from "../../hooks/useUserSearchFilters"

const UserSearchFilters = () => {

	const userSearchFilter = useUserSearchFilters()

	const router = useRouter()

	const [gender, setGender] = useState('F')
	const [location, setLocation] = useState<string| undefined>(undefined)

	// const {add, data, loading, error } = useCreateUserSearchFilters()
	const {update, data, loading, error } = useUpdateUserSearchFilters()

	const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)

	const onChangeLocation = (e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)

	const createUserSearchFilter = () => {
		if (userSearchFilter) {
			try {
				update({
					variables: {
						filter: {
							id: userSearchFilter.id,
							gender: gender,
							location: location,
						}
					}
				})
			} catch {
				console.log(error?.graphQLErrors)
				return
			}
		} else {
			// try {
			// 	addUserSearchFilter({
			// 		variables: {
			// 			filter: {
			// 				gender: gender,
			// 				location: location,
			// 			}
			// 		}
			// 	})
			// } catch {
			// 	console.log(error?.graphQLErrors)
			// 	return
			// }
		}
		// if (data && !error) {
		// 	router.push('users')
		// }
	}

	return (
		<div className="">
			<Head>
				<title>ユーザー検索フィルター</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-full">
				<div className="flex">
					<SideNavigationContainer/>
					<div className="max-w-lg mx-auto">
						<form className="w-full">
							<div className="">
								<div className="pt-4">
									<div className="relative z-0 w-full mb-6 group">
										<select
											name="gender"
											id="floating_gender"
											className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
											onChange={ onChangeGender }
										>
											<option value={ 'M' }>男性</option>
											<option value={ 'F' }>女性</option>
											<option value={ 'O' }>その他</option>
										</select>
										<label
											htmlFor="floating_gender"
											className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"	
										>
											Gender
										</label>
									</div>
								</div>
								<div className="">
									<div className="relative z-0 w-full mb-6 group">
										<select
											name="location"
											id="floating_location"
											className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
											onChange={ onChangeLocation }
										>
											{ prefectures.map((p) => (
												<option key={ p.code } value={ p.name } >
													{ p.name }
												</option>
											))}
										</select>
										<label
											htmlFor="floating_location"
											className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

										>
											Location
										</label>
									</div>
								</div>
								<Button variant="primary" size="md" onClick={ createUserSearchFilter }>
									検索条件を保存
								</Button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	)
}

export default UserSearchFilters