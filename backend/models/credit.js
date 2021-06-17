import mongoose from 'mongoose';

const creditSchema = mongoose.Schema({
    name: String,
    price: Number,
    date: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let Credit = mongoose.model('credit', creditSchema);

export default Credit;