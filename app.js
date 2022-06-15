var express=require('express'); // imported framework express

var port =process.env.PORT|| 3000; // if a port is not mention in environment file it will use 3000 as default port 

var app =express();

let query ='';
let db =require('./db');
 
app.get('/users',function(req,res){
    query='SELECT * FROM users;';
    db.dbcon.query(query,function(error,results){
        if(error){
            return res.status(500).send({
                error:true,
                message:'error ho gyi bhai'
            })
        }else {

            console.log(results)
            return res.send({
                error:false ,
                data:results,
                message:'succes'
            });
        }

    });
});
