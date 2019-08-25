const shell = require("shelljs");
var express = require('express');
const router = express.Router();

shell.cd(__dirname);
shell.cd("../")

// 判断，如果是mater分支更新，就自动拉取新代码
/**
 * TODO 
 * 自动化部署，之后需要迁出项目本身，首先进行删包，再进行安装重启,
 * 存储commit内容
 */


router.all("/push",function(req,res,next){  
  
  console.log(req.body.ref);
  if(req.body&&req.body.ref==='refs/heads/master'){
    
    if (!shell.which('git')) {
      shell.echo('Sorry, this script requires git');
      shell.exit(1);
    }    
    shell.exec("git fetch");
    shell.exec("git pull");
    shell.exec("npm install",{async:true});
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
