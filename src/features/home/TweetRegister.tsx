import { useState } from "react"
import { Button } from "../../components/ui/Button"

interface Props {
	onClickCreateTweet: (text: string) => void;
}

export const TweetRegister: React.FC<Props> = ({
	onClickCreateTweet
}) => {
	const [text, setText] = useState('')

	return (
		<div className="py-4">
			<div className="relative z-0 col-span-2">
				<textarea
					name="message"
					rows={2}
					className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-900 focus:border-pink-300 focus:outline-none focus:ring-0"
					placeholder=" "
					onChange={ e => setText(e.target.value) }
				></textarea>
				<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-pink-300 peer-focus:dark:text-pink-300">Your message</label>
			</div>
			<div className="py-4">
				<Button variant='primary' onClick={ () => onClickCreateTweet(text) }>
					つぶやく
				</Button>
			</div>
		</div>
	)
}
