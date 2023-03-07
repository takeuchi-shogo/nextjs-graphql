import { UserProfileItemHeader } from "./ui/UserProfileItemHeader"

interface Props {
	marital_history: string | undefined
	presence_of_children: string | undefined
	intentions_towards_marriage: string | undefined
	desire_for_children: string | undefined
	household_chores_and_child_rearing: string | undefined
	ideal_first_encounter: string | undefined
	dating_exprnses: string | undefined
}

export const UserAttitudeTowardsLoveAndMarriage: React.FC<Props> = ({
	marital_history,
	presence_of_children,
	intentions_towards_marriage,
	desire_for_children,
	household_chores_and_child_rearing,
	ideal_first_encounter,
	dating_exprnses,
}) => {
	return (
		<>
			<UserProfileItemHeader>
				恋愛、結婚観について
			</UserProfileItemHeader>
		</>
	)
}
