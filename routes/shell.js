const shell = require("shelljs");
var express = require('express');
const router = express.Router();
const path = require("path")

shell.cd(__dirname);
shell.cd("../")
const gitPath = shell.pwd(1).stdout;
router.all("/push",function(req,res,next){  
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  }
  shell.exec("git add .").code;
  shell.exec("git commit -am 'autocommit'");
  if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }
  shell.exec("git push");
  res.send("fwe");
  // next();
  shell.config.reset(); 
})

module.exports = router