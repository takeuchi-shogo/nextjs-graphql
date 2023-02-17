
interface Props {
	children: React.ReactNode;
}

export const LoginLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="">
			<div className="max-w-lg mx-auto">
				<h1 className="text-4xl font-medium">Sign in</h1>
				<p className="text-slate-400">Hi, Welcome back!!</p>

				<div>
					{/* Social login button */}
				</div>
				{ children }
			</div>
		</div>
	)
}
