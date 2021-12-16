import { saveComponent } from '../db/db_functions'

exports.handler = async (request, context) => {
    const { type, data } = JSON.parse(request.body)
    console.debug(request.headers)
    if (request.headers.auth != process.env.BEARER) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "You're not authenticated to access this! " })
        }
    }
    const response = saveComponent(type, data)

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `success uploaded as ${response.name}` })
    }

};