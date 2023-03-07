import Link from "next/link"
import { UsersQuery } from "../../../graphql/graphql"
import { Button } from "../../../components/ui/Button"
import { useRouter } from "next/router"

interface Props {
	// children: ReactNode
	data: UsersQuery | undefined
}

export const UserLists: React.FC<Props> = ({ data }) => {

	return (
		<div className="w-full">
			<div className="flex flex-col">
				<div className="flex justify-between">
					<h2 className="text-xl font-bold">
						User List page
					</h2>
					<div className="self-center">
						<Link href='/user_search_filters' className="text-slate-500 hover:text-blue-500">
							検索条件を設定
						</Link>
					</div>
				</div>

				<ul>
					{ data?.users.edges.map((users) => (
						<li className="font-semibold text-sm" key={ users.node.id }>
							<Link href={ `/users/${ users.node.id }` }>
								<div className="py-3 px-4 my-3 border rounded">
									<div className="font-semibold text-lg text-black">
										display_name: { users.node.display_name }
									</div>
									<span className="font-light text-sm text-gray-500">screen name: { users.node.screen_name }</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
				<div className="flex space-x-5">
					{ data?.users.page_info.has_next_page &&
						<div>
							<Link href={ `/users/` }>
								Prev
							</Link>
						</div>
					}
					{ data?.users.page_info.has_previous_page &&
						<div>
							<Link href={ `/users/` }>
								Next
							</Link>
						</div>
					}
				</div>
			</div>
		</div>
	)
}
