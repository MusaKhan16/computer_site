import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.URI)

const product = new Schema({
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

export const GPU = mongoose.model('Graphics Card', product)
export const CPU = mongoose.model('Processor', product)
export const RAM = mongoose.model('RAM', product)
export const MOTHERBOARD = mongoose.model('Motherboard', product)
export const NIC = mongoose.model('Nic', product)
export const CASE = mongoose.model('Case', product)
export const PERIPHERALS = mongoose.model('Peripherals', product)