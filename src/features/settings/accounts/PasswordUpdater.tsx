import Link from "next/link"
import { FloatingInput } from "../../../components/ui/Form/FloatingInput"
import { Button } from "../../../components/ui/Button"
import { useState } from "react"
import { useUpdateAccountMutation } from "../../../graphql/graphql"

export const PasswordUpdater = () => {

	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const [save, { data, error }] = useUpdateAccountMutation()

	const onChangeCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentPassword(e.target.value)
	}
	const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPassword(e.target.value)
	}
	const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value)
	}

	const onClickChangePassword = () => {
		if (newPassword != confirmPassword ) {
			console.log('パスワードが一致しません')
			return
		}

		console.log('パスワードを変更します')
		save({
			variables: {
				account: {
					new_password: newPassword
				}
			}
		})
		console.log(error)
		console.log(data)
	}

	// パスワードを変更するロジックを記入する
	return (
		<div className="px-6">
			<div className="py-6">
				<h2 className="text-gray-600 font-bold">パスワードを変更</h2>
			</div>
			<div>
				{/* Form */}
				<form className="space-y-6">
					{/* Current Password */}
					<div className="pt-4">
						<FloatingInput
							type={ 'password' }
							id={ 'currentPassword' }
							label={ 'Current Password' }
							value={ currentPassword }
							onChangeEvent={ onChangeCurrentPassword }
						/>
						<div>
							<Link className="text-pink-300 text-sm" href={ '/forgot_password' }>
								<div>
									<span>
										Forgot Password?
									</span>
								</div>
							</Link>
						</div>
					</div>
					<div className="space-y-6">
						{/* New Password */}
						<div>
							<FloatingInput
								type={ 'password' }
								id={ 'newPassword' }
								label={ 'New Password' }
								value={ newPassword }
								onChangeEvent={ onChangeNewPassword }
							/>
						</div>
						{/* Confirm Password */}
						<div>
							<FloatingInput
								type={ 'password' }
								id={ 'confirmPassword' }
								label={ 'Confirm Password' }
								value={ confirmPassword }
								onChangeEvent={ onChangeConfirmPassword }
							/>
						</div>
					</div>
					{/* Text */}
					<div>
						<p className="text-gray-400 text-base">
							パスワードを変更すると、現在使用中のセッションを除くすべてのアクティブな ○○ セッションからログアウトされます
						</p>
					</div>
					{/* Submit Button */}
					<div>
						<Button
							onClick={ onClickChangePassword }
						>
							パスワードを変更
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
