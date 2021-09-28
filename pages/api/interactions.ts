import type { NextApiRequest, NextApiResponse } from 'next'

import { getInteractions } from '../../services/data'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => res.status(200).json(getInteractions())

export default handler
