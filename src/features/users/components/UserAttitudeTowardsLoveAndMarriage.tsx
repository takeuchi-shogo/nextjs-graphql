import { UserProfileItem } from "./ui/UserProfileItem"
import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"
import { UserProfileItemLayout } from "./ui/UserProfileItemLayout"

interface Props {
	marital_history: string | undefined
	presence_of_children: string | undefined
	intentions_towards_marriage: string | undefined
	desire_for_children: string | undefined
	household_chores_and_child_rearing: string | undefined
	meeting_preference: string | undefined
	dating_exprnses: string | undefined
}

export const UserAttitudeTowardsLoveAndMarriage: React.FC<Props> = ({
	marital_history,
	presence_of_children,
	intentions_towards_marriage,
	desire_for_children,
	household_chores_and_child_rearing,
	meeting_preference,
	dating_exprnses,
}) => {
	return (
		<UserProfileItemLayout>
			<UserProfileItemHeader>
				恋愛、結婚観について
			</UserProfileItemHeader>
			<div className="space-y-2">
				<UserProfileItem
					label={ '結婚歴' }
					value={ marital_history}
				/>
				<UserProfileItem
					label={ '子供の有無' }
					value={ presence_of_children }
				/>
				<UserProfileItem
					label={ '結婚に対する意思' }
					value={ intentions_towards_marriage }
				/>
				<UserProfileItem
					label={ '子供が欲しいか' }
					value={ desire_for_children }
				/>
				<UserProfileItem
					label={ '家事、育児' }
					value={ household_chores_and_child_rearing }
				/>
				<UserProfileItem
					label={ '会うまでの希望' }
					value={ meeting_preference }
				/>
				<UserProfileItem
					label={ 'デートの費用' }
					value={ dating_exprnses }
				/>
			</div>
		</UserProfileItemLayout>
	)
}
