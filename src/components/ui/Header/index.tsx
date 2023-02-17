import Link from "next/link"

export const Header = () => {
	return (
		<header className="">
			<div className="bg-white">
				<div className="py-3 px-6">
					<div className="flex justify-between">
						<div className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
							</svg>
							<span className="ml-2 font-semibold text-[#252C32]">Application Name</span>
						</div>

						<div className="ml-2 flex">
							<div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
								<Link href="/signin">
									<span className="text-sm font-medium">Sign in</span>
								</Link>
							</div>
							<div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
								<Link href="/signup">
									<span className="text-sm font-medium">Sign up</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
