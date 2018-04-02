/**
 * Created by Pravin on 29/03/2018.
 */
var user = require('../../../models/user');



function rand(length) {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

function addUser(req,res){
	var date = new Date();
	 var wallet_address      = date.getFullYear().toString()+rand(2)+date.getMonth().toString()+rand(2)+date.getDay().toString()+rand(2)+date.getHours().toString()+date.getMinutes().toString()+rand(2)+date.getSeconds().toString()+date.getMilliseconds().toString()+rand(2)+Math.floor((Math.random() * 100000) + 1).toString();
     var lable =  date.getFullYear().toString()+rand(2)+date.getMonth().toString()+rand(2)+date.getDay().toString()+rand(2)+date.getHours().toString()+date.getMinutes().toString()+rand(2)+date.getSeconds().toString()+date.getMilliseconds().toString()+rand(2)+Math.floor((Math.random() * 100000) + 1).toString();

     var NewUser = new user();

       var query = {};
        query = {
       	wallet_address : wallet_address,
       	lable : lable,
       	user_id : new Date().getTime(),
       	currency_name : req.body.selectedName,
        msg : req.body.message
       }

          NewUser.Name = req.body.name ;
          NewUser.status = "success" ;
          NewUser.Created = date;
          NewUser.wallet_info = query;

		  

      user.find({},function(err,result){
          if(result[0]){
               result[0].wallet_info.push(query);
               user.update({},{$set : {"wallet_info":result[0].wallet_info}},function(){
                 res.json(result);
               })
              
          }else{
                        NewUser.save(function (err, savedEvent) {
                 res.json(savedEvent);
                 // console.log("WSWSWSWSWSWSWSW",JSON.stringify(savedEvent));
                })      
          }
          
      })
       
     
// console.log("WSWSWSWSWSWSWSW",JSON.stringify(date.getTime()));
      

      
};

function alluser(req,res){
	user.find({},function(err,result){
		res.json(result);
	})
}

 

module.exports.addUser = addUser;
module.exports.alluser = alluser;







