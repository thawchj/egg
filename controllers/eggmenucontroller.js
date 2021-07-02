const eggmenu = require('../models/eggmenu');

exports.index = async(req,res,next) => {
    const eggmenuall = await eggmenu.find(); 
    res.render('index',{data :eggmenuall})
}