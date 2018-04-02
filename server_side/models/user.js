/**
 * Created by Pravin on 29/03/2018.
 */

var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var schema = new mongoose.Schema({
    Name: {type : String},
    status : {type : String},
    cteated : Date,
    wallet_info :[{
        wallet_address : {type : String},
        user_id : {type : Number},
        lable : {type : String},
       currency_name : {type: String, enum : ['Bitcoin',' Bitcoin Cash','Bitcoin Gold','Ripple','Litecoin','Ethereum']},
       msg : {type : String}    
    }] 
    
})



module.exports = mongoose.model('user',schema);
