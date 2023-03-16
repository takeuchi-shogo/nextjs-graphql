import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	school_name: string | undefined
	job_title: string | undefined
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
		</UserProfileItemLayout>
	)
}
