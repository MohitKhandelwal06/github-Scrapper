const cheerio=require('cheerio');
const request=require('request');
const {topicsTopIssues}=require("./topTopicsIssues");
const fs=require('fs');
const { log } = require('console');

function topics(url){
    request(url,cb);
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
let topicsArr=selecTool(".no-underline.flex-grow-0");

for(let i=0;i<3;i++){
    let partialLink=selecTool(topicsArr[i]).attr('href');

    // console.log(partialLink);
    // console.log(__dirname+);
    if(!fs.existsSync(__dirname+partialLink)){
        fs.mkdirSync(__dirname+partialLink);
        // console.log("We Can Create here");
    }
    topicsTopIssues(partialLink);
}
}

module.exports={
    topics:topics
};