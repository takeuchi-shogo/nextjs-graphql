import Link from "next/link"
import { UsersQuery } from "../../../graphql/graphql"
import { useEffect, useRef, useState } from "react"
import { PageHeader } from "../../../components/ui/PageHeader"

interface Props {
	// children: ReactNode
	data: UsersQuery | undefined
}

export const UserLists: React.FC<Props> = ({ data }) => {

	const element = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState(0)

	useEffect(() => {
		if (element?.current) {
			console.log(element)
			console.log(element.current.clientHeight, window.innerHeight)
		}
		const updateSize = () => {
			setSize(window.innerHeight)
		}
		window.addEventListener('resize', updateSize)
		updateSize()

		console.log('size', size)
	})

	return (
		<div className="w-full px-8" ref={element}>
			<div className="flex flex-col">
				<PageHeader>
					<div className="flex justify-between">
						<h2 className="text-xl font-bold">
							ユーザー一覧
						</h2>
						<div className="self-center">
							<Link href='/user_search_filters' className="text-slate-500 hover:text-blue-500">
								検索条件を設定
							</Link>
						</div>
					</div>
				</PageHeader>

				<ul className="grid grid-cols-5 gap-3 my-6">
					{ data?.users.edges.map((users) => (
						<li className="font-semibold text-sm" key={ users.node.id }>
							<Link href={ `/${ users.node.screen_name }` }>
								<div className="rounded">
									<div>
										<img className="rounded" src="/assets/sample-image.png" alt="sample image" />
									</div>
									<div className="py-2">
										<div className="font-semibold text-lg text-black">
											{ users.node.display_name }
										</div>
										<span className="font-light text-sm text-gray-500">{ users.node.age }歳 { users.node.user_profile.residence_state }</span>
									</div>
									<div className="font-light text-xs text-gray-500">
										{ users.node.user_profile.introduction }
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
				<div className="flex space-x-5 mx-auto">
					{ data?.users.page_info.has_previous_page &&
						<div>
							<Link href={ `/users/` }>
								Prev
							</Link>
						</div>
					}
					{ data?.users.page_info.has_next_page &&
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
