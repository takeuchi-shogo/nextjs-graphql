interface Props {
	children: React.ReactNode
}

export const SettingPageLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			{ children }
		</>
	)
}
