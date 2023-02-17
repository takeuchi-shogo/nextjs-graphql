
interface Props {
	children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<main className="w-100 h-100">
			{ children }
		</main>
	)
}
