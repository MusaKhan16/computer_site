import { getComponents } from '../db/db_functions';

exports.handler = async (request, context) => {
    let query = JSON.parse(request.body).title
    const data = await getComponents('GPU', query ? { title: query } : {})
    return {
        statusCode: typeof (data) == String ? 505 : 200,
        body: JSON.stringify(data)
    }
}