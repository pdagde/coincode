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
       	currency_name : req.body.selectedName
       }

          NewUser.Name = req.body.name ;
          NewUser.status = "success" ;
          NewUser.msg = req.body.message;
          NewUser.Created = date;
          NewUser.wallet_info = query;

		  
       
     
// console.log("WSWSWSWSWSWSWSW",JSON.stringify(date.getTime()));
      NewUser.save(function (err, savedEvent) {
      	res.json(savedEvent);
      	// console.log("WSWSWSWSWSWSWSW",JSON.stringify(savedEvent));
      })

      
};

function alluser(req,res){
	user.find({},function(err,result){
		res.json(result);
	})
}

 

module.exports.addUser = addUser;
module.exports.alluser = alluser;







