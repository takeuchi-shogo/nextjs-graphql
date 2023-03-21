import { UserProfileItem } from "./ui/UserProfileItem"
import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	school_name: string | null | undefined
	job_title: string | null | undefined
}

export const UserEducationAndCareer: React.FC<Props> = ({
	school_name,
	job_title,
}) => {
	return (
		<UserProfileItemLayout>
			<UserProfileItemHeader>
				学歴、職歴
			</UserProfileItemHeader>
			<div className="space-y-2">
				<UserProfileItem
					label={ '学校名' }
					value={ school_name }
				/>
				<UserProfileItem
					label={ '職業名' }
					value={ job_title }
				/>
			</div>
		</UserProfileItemLayout>
	)
}
