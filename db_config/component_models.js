import mongoose, { Schema } from 'mongoose';


const component = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specifications: {
        type: Object,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const GPU = mongoose.model('Graphics Card', component)
const CPU = mongoose.model('Processor', component)
const RAM = mongoose.model('RAM', component)

module.exports = { CPU, GPU, RAM }