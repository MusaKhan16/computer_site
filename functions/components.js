import mongoose from 'mongoose';
const { CPU } = require('../db_config/component_models.js')

exports.handler = async (event, context) => {

    console.log(process.env.URI)
    console.log(event.body)
    const data = CPU(JSON.parse(event.body))
    data.save()

    return {
        statusCode: 200,
        body: event.body
    }
};