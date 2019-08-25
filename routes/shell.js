const shell = require("shelljs");
var express = require('express');
const router = express.Router();

shell.cd(__dirname);
shell.cd("../")
router.all("/push",function(req,res,next){  
  
  console.log(req.body.ref);
  if(req.body&&req.body.ref==='refs/heads/master'){
    
    if (!shell.which('git')) {
      shell.echo('Sorry, this script requires git');
      shell.exit(1);
    }    
    // shell.exec("git fetch");
    // shell.exec("git pull");
    // shell.exec("cnpm install",{async:true});
    console.log("master pull OK");
    const data={
      message:'pull OK'
    }
    res.send(data);
    shell.config.reset(); 
  }else{
    console.log("master no pull");
    const data={
      message:'master no pull'
      
    };
    res.send(data);
  }
})

module.exports = router
