
interface Props {
	children: React.ReactNode;
}

export const SignupLayout:React.FC<Props> = ({ children }) => {
	return (
		<div className="">
			<div className="max-w-lg mx-auto">
				<h1 className="text-4xl font-medium">Signup</h1>
				<p className="text-slate-400">Let’s get you all set up so you can verify your personal account and begin setting up your profile.</p>

				<div>
					{/* Social login button */}
				</div>
				{ children }
			</div>
		</div>
	)
}
