const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String,require: true,trim: true},
    text: {type : String},
    image: {type : String}
},{
    collection: 'egg' 
});

const eggmenu = mongoose.model('egg',schema) ; 

module.exports = eggmenu ;