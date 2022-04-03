const cheerio=require('cheerio');
const request =require('request');
const path=require('path');
const fs=require("fs");
const { jsPDF } = require("jspdf");
const { log } = require('console');
const { resolve } = require('path/win32');



var tname;
async function extractInfo(partialUrl,topicName){
baseUrl="https://github.com";
tname=topicName;
// console.log(partialUrl+" "+tname);
request(baseUrl+partialUrl+'/issues',cb);

 
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
     let projectName=selecTool('.mr-2.flex-self-stretch');
    console.log(projectName.text());
    let textArr=selecTool('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
    const doc=new jsPDF();
    for(let i=0;i<textArr.length;i++){
        // console.log(selecTool(textArr[i]).text());
        doc.text(selecTool(textArr[i]).text()+"\n",10,10);
        // console.log('https://github.com'+selecTool(textArr[i]).attr('href'));
        doc.text('https://github.com'+selecTool(textArr[i]).attr('href')+"\n",10,10);
    }
    let finalpath=path.join(__dirname,"topics");
    doc.save(finalpath+'.pdf');
 }

 module.exports = {
     extractInfo:extractInfo
 }