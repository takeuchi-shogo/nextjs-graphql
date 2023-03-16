import Link from "next/link"

export const IndexLayout = () => {
	return (
		<div className="max-w-2xl">
			<div className="flex flex-col">
				<div className="px-4 py-6">
					<h2 className="text-gray-600 font-bold">アカウントページ</h2>
				</div>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts/informations'>
					<div>
						<div className="text-gray-600 font-normal">
							アカウント情報
						</div>
						<p className="font-light text-xs text-gray-400">電話番号やメールアドレスを確認する事が出来ます</p>
					</div>
				</Link>
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts/password'>
					<div>
						<div className="text-gray-600 font-normal">
							パスワード
						</div>
						<p className="font-light text-xs text-gray-400">パスワードを変更できます</p>
					</div>
				</Link>
				{/* <Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
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
				</Link> */}
				<Link className="px-4 py-4 hover:bg-gray-100" href='/settings/accounts'>
					<div>
						<div className="text-gray-600 font-normal">
							アカウント削除
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}
