import express from 'express'
import './config/dotenv.js'
import { connectDB } from './config/db.js';
import authUserRoutes from './route/auth-user.js'

const app = express();
const PORT = process.env.PORT;
app.use(express.json())
connectDB();

app.get('/', (req, res)=>{
    res.status(200).send({msg: "Hello Everyone"})
})
app.use('/auth/v1/user', authUserRoutes);

app.listen(PORT, (req, res)=>{
    console.log(`Server is live at ${PORT}`)
})