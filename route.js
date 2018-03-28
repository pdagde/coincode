/**
 * Created by Pravin on 29/03/2018.
 */

'use strict';

var auth = require("./server_side/controller/api/auth/auth.js");
// var events = require("./server_side/controller/api/events/createevents.js")

// E:\codebase\crive3\calenderCode\calender\server_side\controller\api\events\createevents.js

module.exports.register = function(router){

 router.route('/auth/addUser').post(auth.addUser);
 router.route('/auth/alluser').post(auth.alluser);

  console.log('routes registered..!');
};

