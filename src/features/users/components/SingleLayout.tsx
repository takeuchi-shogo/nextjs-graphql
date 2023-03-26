import { useUserQuery } from "../../../graphql/graphql"
import { UserLikeButton } from "./UserLikeButton"
import { UserBasicProfile } from "./UserBasicProfile"
import { UserProfileContainer } from "./UserProfileContainer"
import { UserAttitudeTowardsLoveAndMarriage } from "./UserAttitudeTowardsLoveAndMarriage"
import { UserEducationAndCareer } from "./UserEducationAndCareer"
import { UserIntroduction } from "./UserIntroduction"
import { UserPersonalityAndLifestyleAndHobbies } from "./UserPersonalityAndLifestyleAndHobbies"
import { Button } from "../../../components/ui/Button"

interface Props {
	screen_name: string
}

export const SingleLayout: React.FC<Props> = ({ screen_name }) => {

	const { data, loading, error } = useUserQuery({
		variables: {
			screen_name: screen_name,
		}
	})

	if (loading) return <p>Now Loading .....</p>
	if (error) return <p className='font-bold text-3xl'>error</p>

	return (
		<div className="flex mt-14 px-8 font-yu">
			<div className="space-y-6">
				<div className="">
					<img className="object-cover w-80 h-80 rounded" src="/assets/young-gals.jpg" alt="sample" />
				</div>
				<div className="space-y-2">
					<div className="text-zinc-800">
						<span className="text-xl font-bold">{ data?.user.display_name }</span>
					</div>
					<div className="text-xs">
						{ data?.user.age }歳
					</div>
				</div>
				<div className="space-y-4">
					<UserLikeButton id={ data?.user.id as string } is_like={ data?.user.is_liked } />
					<div>
						<Button
							variant="secondary"
							size="full"
						>
							メッセージを送信
						</Button>
					</div>
				</div>
			</div>
			<UserProfileContainer>
				<UserIntroduction
					introduction={ data?.user.user_profile.introduction }
				/>
				<UserBasicProfile
					height={ data?.user.user_profile.height }
					body_type={ data?.user.user_profile.body_type }
					blood_type={ data?.user.user_profile.blood_type }
					residence_state={ data?.user.user_profile.residence_state }
					hometown_state={ data?.user.user_profile.hometown_state }
					occupation={ data?.user.user_profile.occupation }
					education={ data?.user.user_profile.education }
					annual_income={ data?.user.user_profile.annual_income }
					smoking={ data?.user.user_profile.smoking }
					drinking={ data?.user.user_profile.drinking }
				/>
				<UserEducationAndCareer
					school_name={ data?.user.user_profile.school_name }
					job_title={ data?.user.user_profile.job_title }
				/>
				<UserAttitudeTowardsLoveAndMarriage
					marital_history={ data?.user.user_profile.marital_history }
					presence_of_children={ data?.user.user_profile.presence_of_children }
					intentions_towards_marriage={ data?.user.user_profile.intentions_towards_marriage }
					desire_for_children={ data?.user.user_profile.desire_for_children }
					household_chores_and_child_rearing={ data?.user.user_profile.household_chores_and_child_rearing }
					meeting_preference={ data?.user.user_profile.meeting_preference }
					dating_exprnses={ data?.user.user_profile.dating_expenses }
				/>
				<UserPersonalityAndLifestyleAndHobbies
					sociability={ data?.user.user_profile.sociability }
					roommates={ data?.user.user_profile.roommates }
					days_off={ data?.user.user_profile.days_off }
				/>
			</UserProfileContainer>
		</div>
	)
}
