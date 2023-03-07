import { useUserQuery } from "../../../graphql/graphql"
import { UserLikeButton } from "./UserLikeButton"
import { UserBasicProfile } from "./UserBasicProfile"
import { UserProfileContainer } from "./UserProfileContainer"

interface Props {
	id: string
}

export const SingleLayout: React.FC<Props> = ({ id }) => {

	const { data, loading, error } = useUserQuery({
		variables: { id: id }
	})

	if (loading) return <p>Now Loading .....</p>
	if (error) return <p className='font-bold text-3xl'>error</p>

	return (
		<div>
			<div className="text-zinc-800">
				<span className="text-xl font-bold">{ data?.user.display_name }</span>
			</div>
			<div className="text-xs">{ data?.user.age }歳</div>

			<UserLikeButton id={ id } is_like={ data?.user.is_liked } />

			<UserProfileContainer>
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
			</UserProfileContainer>
		</div>
	)
}
