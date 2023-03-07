import Link from "next/link"

interface Props { 

}

export const SideNavigationContainer: React.FC<Props> = () => {
	return (
		<div className="w-60">
			<div className="fixed inset-y-0">
				{/* Side Navigation */ }
				<div className="flex flex-col space-y-3 px-4">
					<div className="text-lg">
						<div className="font-light">
							Main
						</div>
					</div>
					<ul className="flex flex-col space-y-2">
						<Link href="/home">
							<li>
								<div className="font-semibold text-lg">
									<span>
										Home
									</span>
								</div>
							</li>
						</Link>
						<Link href="/users">
							<li>
								<div className="font-semibold text-lg">
									<span>
										Users
									</span>
								</div>
							</li>
						</Link>
						<Link href="/messages">
							<li>
								<div className="font-semibold text-lg">
									<span>
										Messages
									</span>
								</div>
							</li>
						</Link>
					</ul>
					<div className="text-lg">
						<div className="font-light">
							Setting
						</div>
					</div>
					<ul className="flex flex-col space-y-2">
						<Link href="/my_profile">
							<li>
								<div className="font-semibold text-lg">
									<span>
										Profile
									</span>
								</div>
							</li>
						</Link>
						<Link href="/settings">
							<li>
								<div className="font-semibold text-lg">
									<span>
										Settings
									</span>
								</div>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}
