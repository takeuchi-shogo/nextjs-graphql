import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/Button"
import { prefectures } from "../../../constants/location"
import { useUpdateUserSearchFilters } from "../../../hooks/useUserSearchFilters"
import { useRouter } from "next/router"
import { FloatingSelect } from "../../../components/ui/Form/FloatingSelect"
import { basicProfile } from "../../../constants/user_profile"

interface Props {
	userSearchFilter: any
}

export const UserSearchFilterForm: React.FC<Props> = ({
	userSearchFilter
}) => {
	const router = useRouter()

	const {update, data, loading, error } = useUpdateUserSearchFilters()

	const [gender, setGender] = useState('')
	const [location, setLocation] = useState<string| undefined>(undefined)
	const [purpose, setPurpose] = useState(0)
	const [hasIntroduction, setHasIntroduction] = useState(false)
	const [bodyTypeId, setBodyTypeId] = useState(0)
	const [bloodTypeId, setBloodTypeId] = useState(0)
	const [occupationId, setOccupationId] = useState(0)
	const [educationId, setEducationId] = useState(0)
	const [annualIncomeId, setAnnualIncomeId] = useState(0)
	const [smokingId, setSmokingId] = useState(0)
	const [drinkingId, setDrinkingId] = useState(0)

	const onChangePurpose = (event: React.ChangeEvent<HTMLSelectElement>) => setPurpose(parseInt(event.target.value))

	const onChangeBodyType = (event: React.ChangeEvent<HTMLSelectElement>) => setBodyTypeId(parseInt(event.target.value))

	const onChangeBloodType= (event: React.ChangeEvent<HTMLSelectElement>) => {
		setBloodTypeId(parseInt(event.target.value))
	}
	const onChangeOccupation = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setOccupationId(parseInt(event.target.value))
	}
	const onChangeEducation = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setEducationId(parseInt(event.target.value))
	}
	const onChangeAnnualIncome = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setAnnualIncomeId(parseInt(event.target.value))
	}
	const onChangeSmoking = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSmokingId(parseInt(event.target.value))
	}
	const onChangeDrinking = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDrinkingId(parseInt(event.target.value))
	}

	const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)

	const onChangeLocation = (e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)

	useEffect(() => {
		setGender(userSearchFilter.gender)
		setLocation(userSearchFilter.location)
		setBodyTypeId(userSearchFilter.body_type_id)
		setBloodTypeId(userSearchFilter.blood_type_id)
		setOccupationId(userSearchFilter.occupation_id)
		setEducationId(userSearchFilter.education_id)
		setAnnualIncomeId(userSearchFilter.annual_income_id)
		setSmokingId(userSearchFilter.smoking_id)
		setDrinkingId(userSearchFilter.drinking_id)
	}, [])

	const updateUserSearchFilter = () => {
		try {
			update({
				variables: {
					filter: {
						id: userSearchFilter.id,
						gender: gender,
						location: location,
						purpose: purpose,
						has_introduction: hasIntroduction,
						height_id: 1,
						body_type_id: bodyTypeId,
						blood_type_id: bloodTypeId,
						occupation_id: occupationId,
						education_id: educationId,
						annual_income_id: annualIncomeId,
						smoking_id: smokingId,
						drinking_id: drinkingId,
					}
				}
			})
		} catch {

		}
		if (data && !error) {
			router.push('/users')
		}
	}


	return (
		<form className="w-full">
			<div className="w-full">
				<div className="pt-4">
					<div className="relative z-0 w-full mb-6 group">
						<select
							name="gender"
							id="floating_gender"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
							onChange={ onChangeGender }
							value={ gender }
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
							value={ location }
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
				<div className="">
					<FloatingSelect
						id={ 'body_type' }
						name={ 'body_type' }
						label={ '体型' }
						onChange={ onChangeBodyType }
						value={ bodyTypeId }
					>
						{ basicProfile.body_type.map((bodyType) => (
							<option key={ bodyType.id } value={ bodyType.id }>{ bodyType.text }</option>
						))}
					</FloatingSelect>
				</div>
				<div className="">
					<FloatingSelect
						id={ 'blood_type' }
						name={ 'blood_type' }
						label={ '血液型' }
						onChange={ onChangeBloodType }
						value={ bloodTypeId }
					>
						{ basicProfile.blood_type.map((bloodType) => (
							<option key={ bloodType.id } value={ bloodType.id }>{ bloodType.text }</option>
						))}
					</FloatingSelect>
				</div>
				{/* <div className="">
					<FloatingSelect
						id={ 'residence_state_id' }
						name={ 'residence_state_id' }
						label={ '居住地' }
						onChange={ onChangeBodyType }
						value={ userProfile?.residence_state_id }
					>
						{ basicProfile.residence.map((residence) => (
							<option key={ residenceState.id } value={ residenceState.id }>{ residenceState.text }</option>
						))}
					</FloatingSelect>
				</div>
				<div className="">
					<FloatingSelect
						id={ 'body_type' }
						name={ 'body_type' }
						label={ '出身地' }
						onChange={ onChangeBodyType }
						value={ userProfile?.body_type_id }
					>
						{ basicProfile.body_type.map((bodyType) => (
							<option key={ bodyType.id } value={ bodyType.id }>{ bodyType.text }</option>
						))}
					</FloatingSelect>
				</div> */}
				<div className="">
					<FloatingSelect
						id={ 'occupation' }
						name={ 'occupation' }
						label={ '職業' }
						onChange={ onChangeOccupation }
						value={ occupationId }
					>
						{ basicProfile.occupation.map((occupation) => (
							<option key={ occupation.id } value={ occupation.id }>{ occupation.text }</option>
						))}
					</FloatingSelect>
				</div>
				<div className="">
					<FloatingSelect
						id={ 'education_id' }
						name={ 'education_id' }
						label={ '学歴' }
						onChange={ onChangeEducation }
						value={ educationId }
					>
						{ basicProfile.education.map((education) => (
							<option key={ education.id } value={ education.id }>{ education.text }</option>
						))}
					</FloatingSelect>
				</div>
				<div className="">
					<FloatingSelect
						id={ 'annual_income_id' }
						name={ 'annual_income_id' }
						label={ '学歴' }
						onChange={ onChangeAnnualIncome }
						value={ annualIncomeId }
					>
						{ basicProfile.annual_income.map((annualIncome) => (
							<option key={ annualIncome.id } value={ annualIncome.id }>{ annualIncome.text }</option>
						))}
					</FloatingSelect>
				</div>
				<div className="">
					<FloatingSelect
						id={ 'smoking_id' }
						name={ 'smoking_id' }
						label={ 'タバコ' }
						onChange={ onChangeSmoking }
						value={ smokingId }
					>
						{ basicProfile.smoking.map((smoking) => (
							<option key={ smoking.id } value={ smoking.id }>{ smoking.text }</option>
						))}
					</FloatingSelect>
				</div>
				<div className="">
					<FloatingSelect
						id={ 'drinking_id' }
						name={ 'drinking_id' }
						label={ 'お酒' }
						onChange={ onChangeDrinking }
						value={ drinkingId }
					>
						{ basicProfile.drinking.map((drinking) => (
							<option key={ drinking.id } value={ drinking.id }>{ drinking.text }</option>
						))}
					</FloatingSelect>
				</div>
				<Button variant="primary" size="md" onClick={ updateUserSearchFilter }>
					検索条件を保存
				</Button>
			</div>
		</form>
	)
}
