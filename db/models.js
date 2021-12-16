import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.URI)

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
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    reference_url: {
        type: String,
        required: true
    }
})

export const GPU = mongoose.model('Graphics Card', component)
export const CPU = mongoose.model('Processor', component)
export const RAM = mongoose.model('RAM', component)