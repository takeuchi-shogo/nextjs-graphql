import { useState } from "react"
import { useGetVerifyEmailByPinCodeQuery } from "../../../graphql/graphql"
import { Alert } from "../../../components/ui/Alert"

interface Props {
	handleConfirmPinCode: () => void
}

export const PinCodeForm: React.FC<Props> = ({ handleConfirmPinCode }) => {
	const [pinCode, setPinCode] = useState('')

	const onChangePinCode = (event: React.ChangeEvent<HTMLInputElement>) => setPinCode(event.target.value)

	const [codeArr, setCodeArr] = useState(new Array(6).fill(''))

	const onConsole = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
		let value = event.target.value
		if (value.length > 1) {
		value = value.slice(0, 1)
		}
		let newPin = [...codeArr]
		newPin[i] = value
		setCodeArr(newPin)
		stepForward(event, i)
	}

	const resetValue = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
		if (event.target.value != '') {
			setCodeArr(reset(i))
		}
	}
	const reset = (i: number) => {
		setCodeArr(codeArr.map((value, index) => (index == i ? '': value)))
		console.log('arr', codeArr)
		return codeArr
	}
	// next focus
	const stepForward = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
		if (e.target.value && i != 6 - 1) {
			document?.getElementById(`code_${ i + 1}`)?.focus()
		}
	}
	// prev focus
	const backStep = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
		if (e.code == 'Backspace') {
			if (0 < i) {
				setCodeArr(
					codeArr.map((value, index) => (index == i ? '': value))
				)
				document?.getElementById(`code_${ i - 1}`)?.focus()	
			}
		}
	}

	const {refetch , data, loading, error} = useGetVerifyEmailByPinCodeQuery({
		variables: { code: '' },
	})


	const handlePinCode = () => {
		let code = [...codeArr]
		let c = code.join('')
		try {
			refetch({ code: c })
			console.log(data, error)
		} catch {
			console.log(error)
		}
		if (data && !error) {
			handleConfirmPinCode()
		}
	}
	
	return (
		<form className="my-5">
			{ error && error?.graphQLErrors.map(({ message }, i) => (
				<div key={i}>
					<Alert message={ message }/>
				</div>
			))}
			<div className="relative z-0 w-full mb-6 group">
				<div className="flex justify-between">
					{ codeArr.map((digit, i) => (
						<input
							type="tel"
							inputMode="numeric"
							pattern="^[0-9]+$"
							id={`code_${ i }`}
							key={ i }
							max={ 9 }
							maxLength={ 1 }
							value={ digit }
							className="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl"
							onChange={ (e) => onConsole(e, i) }
							autoFocus={ i == 0 }
							onFocus={ (e) => resetValue(e, i) }
							onKeyDown={ (e) => backStep(e, i) }
						/>
					))}	
				</div>
			</div>
			<button onClick={ handlePinCode } type="button" className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
					<path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
				</svg>
				<span>Confirm Email Address</span>
			</button>
		</form>
	)
}
