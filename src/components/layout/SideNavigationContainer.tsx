import Link from "next/link"

interface Props { 

}

export const SideNavigationContainer: React.FC<Props> = () => {
	return (
		<div className="w-60">
			{/* Side Navigation */ }
			<div className="flex flex-col space-y-3 px-4">
				<div>
					<div>
						Main
					</div>
				</div>
				<ul>
					<Link href="/home">
						<li>
							<div>
								<span>
									Home
								</span>
							</div>
						</li>
					</Link>
				</ul>
				<div>
					<div>
						Setting
					</div>
				</div>
				<ul>
					<Link href="/my_profile">
						<li>
							<div>
								<span>
									Profile
								</span>
							</div>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}
