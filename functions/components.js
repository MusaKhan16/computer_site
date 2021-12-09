exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ 'message': 'GTX 1050TI' })
    }
};