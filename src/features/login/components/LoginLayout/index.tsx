export const LoginLayout = ({ children }) => {
	return (
		<div className="">
			<div className="max-w-lg mx-auto">
				<h1 className="text-4xl font-medium">Login</h1>
				<p className="text-slate-400">Hi, Welcome back!!</p>

				<div>
					{/* Social login button */}
				</div>
				{ children }
			</div>
		</div>
	)
}
