'use strict';

module.exports = function(Usuario) {

    Usuario.on('resetPasswordRequest', function (info) {
        console.log(info.email); // the email of the requested user
        console.log(info.accessToken.id); // the temp access token to allow password reset
      
        // requires AccessToken.belongsTo(User)
        info.accessToken.user(function (err, user) {
          console.log(user); // the actual user
        });
      });

    Usuario.sendEmail=(message,subject,emailAddresses, cb)=>{
        Usuario.app.models.Email.send({
            to:emailAddresses,
            from:"jmanuel2099@gmail.com",
            subject: subject,
            text: message,
            html: message
        }, function(err, mail){
            console.log("email sended !!!");
            if(err) return err;
            });
            cb(null, 'message sent: '+ message)
    }

    Usuario.remoteMethod('sendEmail',
    {
        http:{
            path:'/sendEmail', verb:'get'
        },
        description: [
            "Api to send email messsages."
        ],
        accepts:[
            {
                arg:'message',
                type:"string",
                required: true
            },
            {
                arg:'subject',
                type:"string",
                required: true
            },
            {
                arg:"emailAddresses",
                type:"string",
                required:true
            }
        ],
        returns:{ arg:'Email',type:"string"
        }
    });

};
