import { UserProfileItem } from "./ui/UserProfileItem"
import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	height: number | undefined
	body_type: string | undefined
	blood_type: string | undefined
	residence_state: string | undefined
	hometown_state: string | undefined
	occupation: string | undefined
	education: string | undefined
	annual_income: string | undefined
	smoking: string | undefined
	drinking: string | undefined
}

export const UserBasicProfile: React.FC<Props> = ({ 
	height,
	body_type,
	blood_type,
	residence_state,
	hometown_state,
	occupation,
	education,
	annual_income,
	smoking,
	drinking,
}) => {
	return (
		<UserProfileItemLayout>
			<UserProfileItemHeader>
				基本情報
			</UserProfileItemHeader>
			<div className="space-y-2">
				<UserProfileItem
					label={ '身長' }
					value={ height + 'cm' }
				/>
				<UserProfileItem
					label={ '体型' }
					value={ body_type }
				/>
				<UserProfileItem
					label={ '血液型' }
					value={ blood_type }
				/>
				<UserProfileItem
					label={ '居住地' }
					value={ residence_state }
				/>
				<UserProfileItem
					label={ '出身地' }
					value={ hometown_state }
				/>
				<UserProfileItem
					label={ '職業' }
					value={ occupation }
				/>
				<UserProfileItem
					label={ '学歴' }
					value={ education }
				/>
				<UserProfileItem
					label={ '年収' }
					value={ annual_income }
				/>
				<UserProfileItem
					label={ 'タバコ' }
					value={ smoking }
				/>
				<UserProfileItem
					label={ 'お酒' }
					value={ drinking }
				/>
			</div>
		</UserProfileItemLayout>
	)
}
