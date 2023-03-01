import clsx from 'clsx'

const variants = {
	primary: 'bg-blue-600 text-white',
	success: '',
	danger: 'bg-red-600 text-white',
	warning: '',
	info: '',
	dark: '',
	light: '',
}

const sizes = {
	sm: 'px-2 py-1 text-xs',
	md: 'px-4 py-2 text-base',
	lg: 'px-4 px-2 text-lg',
}

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants,
	size?: keyof typeof sizes,
	children: React.ReactNode,
}

export const Button = ({
		variant = 'primary',
		size = 'md',
		onClick,
		children,
	}: Props) => {
	return (
		<button
			type="button"
			onClick={ onClick }
			className={clsx(
				'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg shadow-sm font-bold focus:outline-none hover:opacity-80',
				variants[variant],
				sizes[size]
			)}
		>
			<span className="">
				{ children }
			</span>
		</button>
	)
}
