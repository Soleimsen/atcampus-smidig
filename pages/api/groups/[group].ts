import { connectToDB } from 'lib/mongodb'
import { NextApiRequest } from 'next'
import { NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { db } = await connectToDB()
    const { groupId } = req.query
    console.log(req.query)
    await db
        .collection('atcampus-groups')
        .findOne({ groupId })
        .then((group) => {
            res.status(200).json(group)
        })
        .catch((err) => {
            res.status(500).json({
                message: 'error',
                error: err,
            })
        })
}
