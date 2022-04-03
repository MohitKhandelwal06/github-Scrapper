const cheerio=require('cheerio');
const request=require('request');
const {topicsTopIssues}=require("./topTopicsIssues");

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
    console.log(partialLink);
    topicsTopIssues(partialLink);
}
}

module.exports={
    topics:topics
};