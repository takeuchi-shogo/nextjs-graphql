import Link from "next/link"
import { FloatingInput } from "../../../components/ui/Form/FloatingInput"
import { Button } from "../../../components/ui/Button"

export const PasswordUpdater = () => {
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
							value={ '' }
							onChangeEvent={ () => {} }
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
								value={ '' }
								onChangeEvent={ () => {} }
							/>
						</div>
						{/* Confirm Password */}
						<div>
							<FloatingInput
								type={ 'password' }
								id={ 'confirmPassword' }
								label={ 'Confirm Password' }
								value={ '' }
								onChangeEvent={ () => {} }
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
						<Button>
							パスワードを変更
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
