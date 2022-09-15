import { fetchCaseFiles } from './blockchain'
import axios from 'axios'

export const FETCH_ACTIONS = async (context, params) => {
  const { data } = await axios('https://testnet.telos.caleos.io/v2/history/get_deltas', {
    params: {
      limit: 40,
      skip: params.skip,
      code: 'testtelosarb',
      // track: '',
      // filter: '',
      sort: 'desc',
      // after: '',
      // before: '',
      // simple: ''
      ...params
    }
  })
  return data
}

export const FETCH_ACTIONS_HISTORY = async (context: any, case_id: number) => {
  try {
    const [caseFile] = await fetchCaseFiles(context, case_id)
    let skip = 40
    while (true) {
      const { deltas } = await FETCH_ACTIONS(context, {
        after: caseFile.created_at,
        before: caseFile.updated_at,
        skip
      })
      if (deltas.length === 0) break
      skip += 40
    }
  } catch (err) {
    console.log('FETCH_ACTIONS_HISTORY-> fetchCaseFiles error: ', err)
  }
}
