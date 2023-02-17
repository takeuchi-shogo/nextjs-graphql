import Link from "next/link";

interface Props {
	children: React.ReactNode;
}

export const ForgotPasswordLayout:React.FC<Props> = ({ children }) => {
	return (
		<div className="">
			<div className="max-w-lg mx-auto">
				<h1 className="text-4xl font-medium">Forgot Your Password?</h1>
				<p className="text-slate-400">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>

				<div>
					{/* Social login button */}
				</div>
				{ children }
				<div className="border-gray-400">
					{/* border */}
				</div>
				<div>
					<div>
						<div>
							<Link href="/signup">
								Create an Account!
							</Link>
						</div>
						<div>
							<Link href="/signin">
								Already have an account? Login!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
