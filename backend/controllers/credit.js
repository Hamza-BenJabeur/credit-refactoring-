import express from 'express';
import mongoose from 'mongoose';

import Credit from '../models/credit.js';

const router = express.Router();

export const getCredits = async (req, res) => { 
    try {
        const credit = await Credit.find();
                
        res.status(200).json(credit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCredit = async (req, res) => {
    const { name, price, date } = req.body;

    const newCredit = new Credit({ name, price, date })

    try {
        await newCredit.save();

        res.status(201).json(newCredit );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateByAddingCredit = async (req, res) => {
    const { id } = req.params;
    const { name, price} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No credit with id: ${id}`);
    const oldCredit=await Credit.findById(id)
    const oldPrice=oldCredit.price
    const NewPrice=Number(oldPrice)+Number(price)
    const updateCredit = { name, price:NewPrice, _id: id };

    await Credit.findByIdAndUpdate(id, updateCredit, { new: true });

    res.json(updateCredit);
}
export const updateBySubtractingCredit = async (req, res) => {
    const { id } = req.params;
    const { name, price} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No credit with id: ${id}`);
    const oldCredit=await Credit.findById(id)
    const oldPrice=oldCredit.price
    const NewPrice=oldPrice-price
    const updateCredit = { name, price:NewPrice, _id: id };

    await Credit.findByIdAndUpdate(id, updateCredit, { new: true });

    res.json(updateCredit);
}

export const deleteCredit = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No credit with id: ${id}`);

    await Credit.findByIdAndRemove(id);

    res.json({ message: "Credit deleted successfully." });
}


export default router;