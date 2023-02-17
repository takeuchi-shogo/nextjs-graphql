
interface PrivateLayoutProps {
	children: React.ReactNode
}


export const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
	return (
		<>
			{ children }
		</>
	)
}
