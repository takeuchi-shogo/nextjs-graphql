
interface PrivateLayoutProps {
	children: React.ReactNode
}


export const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
	return (
		<>
			<div className="flex max-w-4xl mx-auto">
				{ children }
			</div>
		</>
	)
}
