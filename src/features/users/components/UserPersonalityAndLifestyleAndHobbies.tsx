import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	personality_type: string | undefined
	sociability: string | undefined
	roommates: string | undefined
	days_off: string | undefined
	hobbies: string | undefined
}

export const UserPersonalityAndLifestyleAndHobbies: React.FC<Props> = ({
	personality_type,
	sociability,
	roommates,
	days_off,
	hobbies,
}) => {
	return (
		<UserProfileItemLayout>
			<UserProfileItemHeader>
				性格、生活、趣味
			</UserProfileItemHeader>
		</UserProfileItemLayout>
	)
}
