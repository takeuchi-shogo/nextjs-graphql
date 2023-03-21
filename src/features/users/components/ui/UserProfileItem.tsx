interface Props {
	label: string
	value: string | number | null | undefined
}

export const UserProfileItem: React.FC<Props> = ({ label, value }) => {
	return (
		<div className="flex text-sm">
			<div className="w-40 font-light text-slate-600">
				{ label }
			</div>
			<div className="text-neutral-800 font-semibold">
				{ value != "" ? value : '-' }
			</div>
		</div>
	)
}
