const express = require('express');
const app = express();

const dotenv = require('dotenv')
require('dotenv').config();

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use( express.static( "image" ) );

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server listening on port' + PORT + '!')
});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const eggmenuRouter = require('./routes/eggmenurouter');
app.use('/homepage',eggmenuRouter);


