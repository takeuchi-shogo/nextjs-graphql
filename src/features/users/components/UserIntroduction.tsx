import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	introduction: string | null | undefined
}

export const UserIntroduction: React.FC<Props> = ({ introduction }) => {
	return (
		<UserProfileItemLayout>
			<UserProfileItemHeader>
				自己紹介
			</UserProfileItemHeader>
			{ introduction && (
				<div className="text-zinc-500 font-light">
					<p>{ introduction }</p>
				</div>
			)}
		</UserProfileItemLayout>
	)
}
