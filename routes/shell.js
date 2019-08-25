const shell = require("shelljs");
var express = require('express');
const router = express.Router();

shell.cd(__dirname);
shell.cd("../")
router.all("/push",function(req,res,next){  
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  }
  shell.exec("git fetch");
  shell.exec("git pull");
  shell.exec("cnpm install",{async:true});

  
  const data={
    message:'pull OK'
  }
  res.send(data);
  shell.config.reset(); 
})

module.exports = router
