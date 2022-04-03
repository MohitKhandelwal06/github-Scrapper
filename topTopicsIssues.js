const cheerio=require('cheerio');
const request =require('request');
const fs=require('fs');

function topicsTopIssues(partialUrl){
baseUrl="https://github.com";
request(baseUrl+partialUrl,cb);
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
    let heading =selecTool('.h1');
    // console.log(heading.text());

}

module.exports={
    topicsTopIssues:topicsTopIssues
};