interface Props {
	label: string
	value: string | undefined
}

export const UserProfileItem: React.FC<Props> = ({ label, value }) => {
	return (
		<div className="flex text-sm">
			<div className="w-28 text-slate-600">
				{ label }
			</div>
			<div className="text-neutral-800 font-normal">
				{ value != "" ? value : '-' }
			</div>
		</div>
	)
}
