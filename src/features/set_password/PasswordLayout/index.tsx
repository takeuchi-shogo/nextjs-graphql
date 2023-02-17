
interface Props {
	children: React.ReactNode;
}

export const PasswordLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="">
			<div className="max-w-lg mx-auto">
				<h1 className="text-4xl font-medium">Password</h1>
				<p className="text-slate-400">Hi, Welcome your set password!!</p>

				{ children }
			</div>
		</div>
	)
}
