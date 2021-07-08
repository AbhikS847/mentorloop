const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const connectDB = require('./db/db');

dotenv.config();

app.listen(port, () => {console.log(`Server is successfully running at port ${port}`)});

const readAll = require('./routes/read');
const create = require('./routes/create');
const update = require('./routes/update');
const remove = require('./routes/remove');

connectDB();

app.use('/',readAll);
app.use('/create',create);
app.use('/update',update);
app.use('/remove',remove);

app.get('/',(req,res)=>{
    res.send("Hello world");
})

