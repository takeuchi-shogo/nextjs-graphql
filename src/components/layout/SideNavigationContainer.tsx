import Link from "next/link"

interface Props { 

}

export const SideNavigationContainer: React.FC<Props> = () => {
	return (
		<div className="w-60">
			<div className="sticky inset-y-0 w-60 h-screen border-gray-100 border-r">
				{/* Side Navigation */ }
				<div className="flex flex-col space-y-3 px-4">
					<div className="h-10 my-4 flex align-middle">
						<div className="flex">
							<div className="self-center text-2xl font-extrabold text-pink-300">
								LOGO
							</div>
						</div>
					</div>
					<div className="text-base">
						<div className="font-light text-gray-400">
							メイン
						</div>
					</div>
					<ul className="flex flex-col space-y-5">
						<Link href="/home">
							<li>
								<div className="font-semibold text-lg text-zinc-800">
									<span>
										ホーム
									</span>
								</div>
							</li>
						</Link>
						<Link href="/users">
							<li>
								<div className="font-semibold text-lg text-zinc-800">
									<span>
										ユーザー一覧
									</span>
								</div>
							</li>
						</Link>
						<Link href="/messages">
							<li>
								<div className="font-semibold text-lg text-zinc-800">
									<span>
										メッセージ
									</span>
								</div>
							</li>
						</Link>
					</ul>
					<div className="text-base pt-4">
						<div className="font-light text-gray-400">
							各種設定
						</div>
					</div>
					<ul className="flex flex-col space-y-5">
						<Link href="/my_profile">
							<li>
								<div className="font-semibold text-lg text-zinc-800">
									<span>
										プロフィール
									</span>
								</div>
							</li>
						</Link>
						<Link href="/settings">
							<li>
								<div className="font-semibold text-lg text-zinc-800">
									<span>
										設定とその他
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
