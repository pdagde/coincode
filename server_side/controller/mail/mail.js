var nodeMailer=require('nodemailer');
var mailConfig ={
		service: 'Gmail',
    	auth: {
        	user: 'support@crive.me',
        	pass: 'Crive.17'
    	}
	};
	
var transport = nodeMailer.createTransport(mailConfig);
function sendEmail(mailOptions,callback,retry)
{	
	transport.sendMail(mailOptions,function(err, msg)
	{
		if(err)
		{
			console.log("having-email-error");
			console.log(err);
			if(err.code === 'Throttling')
			{
			}
			else
			{
				if(callback)
				{
					callback(true);
				}
			}
		}
		else
		{
			if(retry)
			{
				clearTimeout(retry.timer);
			}
			if(callback)
			{
				callback(false);
			}
			console.log("message-sent");
		}
	});
}





exports.shareEventBymail = function(userData){
 
  
  var htmlTosend = require("../../template/notifyEmail")(userData);
 
// console.log("XXXXXXXXXXXXXXXXXX",JSON.stringify(htmlTosend));

    var mailOptions={
        from: userData.userEmail,
        to:userData.userEmail,
        subject:  " location: "+ userData.location + " calendar code: " + userData.calCode + " note: " + userData.eventNotes +" subject: "+userData.eventSubject,
        // text: " location: "+ userData.location + " calendar code: " + userData.calCode + " note: " +
         // userData.eventNotes +" subject: "+userData.eventSubject+" password : " +userData.eventPassword +" mail from  : "+ userData.fromUserName,
         html: htmlTosend
 
    };
     sendEmail(mailOptions);
}



