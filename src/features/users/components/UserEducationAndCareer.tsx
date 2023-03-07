import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"

interface Props {
	school_name: string | undefined
	job_title: string | undefined
}

export const UserEducationAndCareer: React.FC<Props> = ({
	school_name,
	job_title,
}) => {
	return (
		<>
			<UserProfileItemHeader>
				学歴、職歴
			</UserProfileItemHeader>
		</>
	)
}
