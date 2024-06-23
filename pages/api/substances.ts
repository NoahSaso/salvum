import type { NextApiRequest, NextApiResponse } from "next"

import { getSubstances } from "../../services/data"
import { Substance } from "../../types"

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Substance[]>,
) => res.status(200).json(getSubstances())

export default handler
