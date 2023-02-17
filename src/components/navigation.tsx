
import Link from "next/link"

const Navigation = () => {
	return (
		<>
			<div>
				<Link href="/">
					<span>Home</span>
				</Link>
			</div>

			<div>
				<Link href="/signup">
					<span>Sign up</span>
				</Link>
			</div>

			<div>
				<Link href="/signin">
					<span>Sign in</span>
				</Link>
			</div>

			<div>
				<Link href="/users">
					<span>Users</span>
				</Link>
			</div>
		</>
	)
}

export default Navigation
