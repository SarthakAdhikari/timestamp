var express = require('express');
var app = express();
var path = require('path');
var moment = require("moment")
app.use('/',express.static(__dirname));

app.get('/:date',function(req,res){
    var date = req.params.date;
    var natDate = new Date(date);
    var t = moment.unix(date);
    if(!isNaN(date)){
   
    res.json(
        {'unix': date , 'natural':t.toString()});
    }
    else if (natDate == 'Invalid Date'){
            res.json({'unix':null, 'natural':null})
    }
    else{
         res.json({'unix': moment().valueOf(t) , 'natural':natDate.toString()})
   
    }
    res.end();
    
});

app.listen(process.env.port || 3000,function(){
    console.log('listening on 8080');
});