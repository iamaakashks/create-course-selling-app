import express from 'express'
import './config/dotenv.js'
const app = express();
const PORT = process.env.PORT;
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send({msg: "Hello Everyone"})
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is live at ${PORT}`)
})