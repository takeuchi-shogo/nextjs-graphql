
interface Props {
	children: React.ReactNode;
}

export const VerifyEmailLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="my-3 mx-auto">
			<div className="">
				<h1 className="text-xl font-bold">Welcome! Create your account.</h1>
				<p className="text-gray-500">Verify Email</p>
				{ children }
			</div>
		</div>
	)
}
