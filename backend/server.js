import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import credit from './routes/credit.js'
const PORT = process.env.PORT|| 5000;
const app=express();






app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors())
app.use('/credits', credit);






mongoose.connect("mongodb://localhost:27017/mvp", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false);





app.listen(PORT,()=>console.log(`i'm listening to localhost:${PORT}`))

