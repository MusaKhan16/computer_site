import { getComponents } from '../db/db_functions'

exports.handler = async (request, context) => {
    let query = JSON.parse(request.body).title
    const data = await getComponents('CPU', query ? { title: query } : {})

    return {
        statusCode: data ? 200 : 500,
        body: JSON.stringify(data)
    }
}