import Link from "next/link"

export const SettingMenuBar = () => {
	return (
		<div className="w-80 h-screen border-r border-gray-200">
			<div className="flex flex-col">
				<div className="px-4 py-6">
					<h2 className="text-gray-600 font-bold">設定</h2>
				</div>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<div>
						<span className="text-gray-600 font-normal">
							アカウント情報
						</span>
					</div>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<span className="text-gray-600 font-normal">
						会員ステータス
					</span>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<span className="text-gray-600 font-normal">
						プライバシーとアクセス
					</span>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<span className="text-gray-600 font-normal">
						セキュリティと安全
					</span>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<span className="text-gray-600 font-normal">
						通知
					</span>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<span className="text-gray-600 font-normal">
						お知らせ
					</span>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<span className="text-gray-600 font-normal">
						その他のリソース
					</span>
				</Link>
			</div>
		</div>
	)
}
