export const ForgotPasswordLayout = ({ children }) => {
	return (
		<div className="">
			<div className="max-w-lg mx-auto">
				<h1 className="text-4xl font-medium">Forgot Password</h1>
				<p className="text-slate-400">Fill up the form to reset the password</p>

				<div>
					{/* Social login button */}
				</div>
				{ children }
			</div>
		</div>
	)
}
