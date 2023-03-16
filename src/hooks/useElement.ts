import { useEffect, useRef, useState } from "react"

export const useElementHeight = <T extends HTMLElement> (
	
) => {
	const heightInspectedElement = useRef<T>(null)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (heightInspectedElement?.current) {
			const { height } = heightInspectedElement.current.getBoundingClientRect()
			setHeight(height)
		}
	}, [heightInspectedElement])

	return [heightInspectedElement, height] as const
}
