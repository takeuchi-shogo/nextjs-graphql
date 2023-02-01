
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	id: number
	name: string
}

const handler= (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	console.log(req)
	const result: Data = {
		id: 100,
		name: 'test name',
	}
	res.status(200).send(result)
}

export default handler
