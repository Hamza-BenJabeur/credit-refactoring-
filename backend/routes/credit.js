import express from 'express';

import {
            getCredits,
            createCredit,
            updateByAddingCredit,
            updateBySubtractingCredit,
            deleteCredit 
       } from '../controllers/credit.js'


const router=express.Router();

router.get('/',getCredits);
router.post('/',createCredit);
router.patch('/:id/add',updateByAddingCredit)
router.patch('/:id/sub',updateBySubtractingCredit);
router.delete('/:id',deleteCredit);

 
export default router;