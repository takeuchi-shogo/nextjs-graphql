import { useEffect, useState } from "react"
import { FloatingSelect } from "../../../components/ui/Form/FloatingSelect"
import { basicProfile } from "../../../constants/user_profile"
import { Button } from "../../../components/ui/Button"
import { useUpdateUserProfileMutation } from "../../../graphql/graphql"

interface Props {
	// height_id: number,
	body_type_id: number,
	blood_type_id: number,
	occupation_id: number,
	education_id: number,
	annual_income_id: number,
	smoking_id: number,
	drinking_id: number,
}

export const MyBasicProfileForm: React.FC<Props> = ({
	// height_id,
	body_type_id,
	blood_type_id,
	occupation_id,
	education_id,
	annual_income_id,
	smoking_id,
	drinking_id
}) => {

	const [bodyTypeId, setBodyTypeId] = useState(0)
	const [bloodTypeId, setBloodTypeId] = useState(0)
	const [occupationId, setOccupationId] = useState(0)
	const [educationId, setEducationId] = useState(0)
	const [annualIncomeId, setAnnualIncomeId] = useState(0)
	const [smokingId, setSmokingId] = useState(0)
	const [drinkingId, setDrinkingId] = useState(0)

	const [saveProfile, { data, error }] = useUpdateUserProfileMutation()

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

	useEffect(() => {
		setBodyTypeId(body_type_id)
		setBloodTypeId(blood_type_id)
		setOccupationId(occupation_id)
		setEducationId(education_id)
		setAnnualIncomeId(annual_income_id)
		setSmokingId(smoking_id)
		setDrinkingId(drinking_id)
	}, [])

	const save = () => {
		saveProfile({
			variables: {
				profile: {
					id: "5",
					body_type_id: bodyTypeId,
				}
			}
		})
	}

	return (
		<form>
			<div className="py-2">
				<h2 className="text-zinc-800 font-bold">基本情報</h2>
			</div>
			<div className="pt-3">
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
				<Button
					variant="primary"
					size="md"
					onClick={ save }
				>
					プロフィールを保存
				</Button>
			</div>
		</form>
	)
}
