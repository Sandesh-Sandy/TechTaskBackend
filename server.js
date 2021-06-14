require('dotenv').config();
const routes = require('./routes/routes')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 8080
const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        let con = await mongoose.connect(process.env.DB, {  
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log('Database Connected to Precily')
    }
    catch(err) {
        console.log(`Error ${err.message}`)
    }
}
connectDB();

app.get('/', (req, res) => res.send('API is Working'))
app.use('/comp1', routes);


app.listen(PORT, console.log(`Server Running on ${PORT}`))