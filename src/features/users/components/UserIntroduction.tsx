import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	introduction: string | undefined
}

export const UserIntroduction: React.FC<Props> = ({ introduction }) => {
	return (
		<UserProfileItemLayout>
			<UserProfileItemHeader>
				自己紹介
			</UserProfileItemHeader>
			<div>
				<p>{ introduction }</p>
			</div>
		</UserProfileItemLayout>
	)
}
