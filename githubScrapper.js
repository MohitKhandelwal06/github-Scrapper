const cheerio=require('cheerio');
const request=require('request');
const {topics}=require('./topics.js');
const path=require('path');
const fs=require('fs');

let url='https://github.com';
request(url,cb);


let dataPath=path.join(__dirname,"topics");
if(!fs.existsSync(dataPath)){
    fs.mkdirSync(dataPath);
}
function cb(err,res,body){
if(err){
    console.log(err);
}else{
    handleHtml(body);
}
}

function handleHtml(html){
    let selecTool=cheerio.load(html);
    topics(url+"/topics");
}
