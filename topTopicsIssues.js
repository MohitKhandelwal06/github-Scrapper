const cheerio=require('cheerio');
const request =require('request');
const path=require('path');
const fs=require("fs");
const { jsPDF } = require("jspdf");
const {extractInfo}=require("./extractInfo");


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
    let heading =selecTool('.h1').text();
    // console.log(heading);
    
    let individualHeadings=selecTool('.text-bold.wb-break-word');
    // console.log(individualHeadings.attr('href'));
    // console.log(individualHeadings.length);
    for(let i=0;i<8;i++){
        // console.log(selecTool(individualHeadings[i]).text());

    extractInfo(selecTool(individualHeadings[i]).attr('href'),heading);
    }

}

module.exports={
    topicsTopIssues:topicsTopIssues
};