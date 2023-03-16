import Link from "next/link"

export const AccountInfomation = () => {
	return (
		<div className="space-y-6">
			<div className="pt-5">
				<h2 className="text-gray-600 font-bold">
					アカウント情報
				</h2>
			</div>
			<div className="space-y-6">
				<div className="text-gray-600">
					<div className="hover:bg-gray-100 py-4">
						{/* Phone */}
						<Link href={ '/settings/phone' }>
							<div>
								<span>
									Phone
								</span>
							</div>
						</Link>
					</div>
					<div className="hover:bg-gray-100 py-4">
						{/* Email */}
						<Link href={ '/settings/email' }>
							<div>
								<span>
									Email
								</span>
							</div>
						</Link>
					</div>
					<div className="hover:bg-gray-100 py-4">
						{/* Verify */}
						<Link href={ '/settings/verify_account' }>
							<div>
								<span>
									Verified
								</span>
							</div>
						</Link>
					</div>
				</div>
				<div>
					{/* Account create at */}
					<div>
						<div className="text-gray-600">
							Account creation
						</div>
					</div>
				</div>
				<div>

				</div>
			</div>
		</div>
	)
}
