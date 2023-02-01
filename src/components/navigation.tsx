
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
				<Link href="/users">
					<span>Users</span>
				</Link>
			</div>
		</>
	)
}

export default Navigation
