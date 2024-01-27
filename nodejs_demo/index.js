/**
 @ClassName:index.js
 @Author:TwT
 @Date:2023/1/10 14:34
 @Version:1.0
 **/
/*const JSZip = require('jszip')
const fs = require('fs')
// const RES = require('re')
try {
    const zipFileEntry = fs.openSync("./asset/e47ee07f62f1fe66.zip")
    console.log(zipFileEntry)
    JSZip.loadAsync(zipFileEntry).then(zip => {
        Object.keys(zip.files).forEach((fname) => {
            console.log(fname)
        });
    })
} catch (e) {
    console.error(`Could not upload the ZIP file: ${e.message}`);
    return false;
}*/
/*const loadZip = async function (file, needFile) {
    // file为文件对象，needFile为必需的文件名数组
    let result, flag = true;
    let isLimit = file.size / 1024 / 1024 < 30;
    // 离线包大小大于30M
    if (!isLimit) {
        console.error('离线包大小不能超过30M!');
        return Promise.reject();
    }
    // 读取文件为异步操作
    result = await new Promise((resolve) => {
        JSZip.loadAsync(file).then(function (zip) {
            let nameArr = [];// zip.files为解压出来的文件
            Object.keys(zip.files).forEach((fname) => {
                nameArr.push(fname);
            });
            // 返回解压后的文件相对路径
            return nameArr;
        }).then(function (results) {
            resolve(results);
        });
    });
    // 判断是否包含文件
    needFile.forEach((file) => {
        if (result.indexOf(file) === -1) {
            flag = false;
        }
    });
    if (!flag) {
        console.error('离线包目录结构不正确!');
        return Promise.reject();
    }
}*/

import {moneyFormat,parseFuncParams} from "./src/utlis.js";

// const {moneyFormat} = require('./src/utlis')
// console.log(moneyFormat(123456))
// console.log(moneyFormat(123456,{fixed:4}))
// console.log(moneyFormat(123456,{fixed:4,sep:'，'}))


/*
const codeList = [
    {
        code: "甲",
        level: 1,
    },
    {
        code: "贷款发放",
        level: 1,
    },
    {
        code: "一、主借款人单位性质",
        level: 1,
    },
    {
        code: "1.国家机关",
        level: 2,
    },
    {
        code: "2.事业单位",
        level: 2,
    },
    {
        code: "3.国有企业",
        level: 2,
    },
    {
        code: "4.城镇集体企业",
        level: 2,
    },
    {
        code: "5.外商投资企业",
        level: 2,
    },
    {
        code: "6.城镇私营企业",
        level: 2,
    },
    {
        code: "7.其他城镇企业",
        level: 2,
    },
    {
        code: "8.民办非企业单位",
        level: 2,
    },
    {
        code: "9.社会团体",
        level: 2,
    },
    {
        code: "10.灵活就业人员缴存",
        level: 2,
    },
    {
        code: "11.其他",
        level: 2,
    },
    {
        code: "二、主借款人月缴存基数",
        level: 1,
    },
    {
        code: "1.上年当地社平工资0.6倍以下",
        level: 2,
    },
    {
        code: "2.上年当地社平工资0.6（含）-1倍",
        level: 2,
    },
    {
        code: "3.上年当地社平工资1（含）-2倍",
        level: 2,
    },
    {
        code: "4.上年当地社平工资2（含）-3倍",
        level: 2,
    },
    {
        code: "5.上年当地社平工资3倍",
        level: 2,
    },
    {
        code: "三、公积金贷款使用",
        level: 1,
    },
    {
        code: "1.首套",
        level: 2,
    },
    {
        code: "2.二套",
        level: 2,
    },
    {
        code: "3.三套及以上",
        level: 2,
    },
    {
        code: "四、贷款类型",
        level: 1,
    },
    {
        code: "1.纯公积金贷款",
        level: 2,
    },
    {
        code: "2.组合贷款",
        level: 2,
    },
    {
        code: "五、贷款地",
        level: 1,
    },
    {
        code: "1.本地贷款",
        level: 2,
    },
    {
        code: "2.异地贷款",
        level: 2,
    },
    {
        code: "其中：由购房地发放贷款的",
        level: 2,
    },
    {
        code: "由缴存地发放贷款的",
        level: 3,
    },
    {
        code: "六、购房面积",
        level: 1,
    },
    {
        code: "1.90（含）㎡以下",
        level: 2,
    },
    {
        code: "2.90-120（含）㎡",
        level: 2,
    },
    {
        code: "3.120-144（含）㎡",
        level: 2,
    },
    {
        code: "4.144㎡以上",
        level: 2,
    },
    {
        code: "七、贷款用途",
        level: 1,
    },
    {
        code: "1.购新建商品住房",
        level: 2,
    },
    {
        code: "其中：保障性住房",
        level: 3,
    },
    {
        code: "2.购二手房",
        level: 2,
    },
    {
        code: "其中：保障性住房 ",
        level: 3,
    },
    {
        code: "3.建造、翻建、大修自住住房",
        level: 2,
    },
    {
        code: "4.其他",
        level: 2,
    },
];
const readyData = {
    "甲": {
        dm: "乙",
        jldw1: "丙",
        sl1: "1",
        jldw2: "丁",
        sl2: "2",
    },
    "贷款发放": {
        dm: "100",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.国家机关": {
        dm: "101",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.事业单位": {
        dm: "102",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "3.国有企业": {
        dm: "103",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "4.城镇集体企业": {
        dm: "104",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "5.外商投资企业": {
        dm: "105",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "6.城镇私营企业": {
        dm: "106",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "7.其他城镇企业": {
        dm: "107",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "8.民办非企业单位": {
        dm: "108",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "9.社会团体": {
        dm: "109",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "10.灵活就业人员缴存": {
        dm: "110",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "11.其他": {
        dm: "111",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.上年当地社平工资0.6倍以下": {
        dm: "201",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.上年当地社平工资0.6（含）-1倍": {
        dm: "202",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "3.上年当地社平工资1（含）-2倍": {
        dm: "203",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "4.上年当地社平工资2（含）-3倍": {
        dm: "204",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "5.上年当地社平工资3倍": {
        dm: "205",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.首套": {
        dm: "301",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.二套": {
        dm: "302",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "3.三套及以上": {
        dm: "303",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.纯公积金贷款": {
        dm: "401",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.组合贷款": {
        dm: "402",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.本地贷款": {
        dm: "501",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.异地贷款": {
        dm: "502",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "其中：由购房地发放贷款的": {
        dm: "503",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "由缴存地发放贷款的": {
        dm: "504",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.90（含）㎡以下": {
        dm: "601",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.90-120（含）㎡": {
        dm: "602",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "3.120-144（含）㎡": {
        dm: "603",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "4.144㎡以上": {
        dm: "604",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "1.购新建商品住房": {
        dm: "701",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "其中：保障性住房": {
        dm: "702",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "2.购二手房": {
        dm: "703",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "其中：保障性住房 ": {
        dm: "704",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "3.建造、翻建、大修自住住房": {
        dm: "705",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
    "4.其他": {
        dm: "706",
        jldw1: "笔",
        sl1: 0,
        jldw2: "万元",
        sl2: moneyFormat(0),
    },
};
const resettableArray = [0, 2, 14, 20, 24, 27, 32, 37]

let tableData = [];
codeList.map((item, index) => {
    if (readyData[item.code]) {
        tableData.push({
            zbmc: item.code,
            level: item.level,
            ...readyData[item.code],
            resettable: resettableArray.indexOf(index) == -1
        });
    } else {
        tableData.push({
            zbmc: item.code,
            level: item.level,
            dm: "-",
            jldw1: "-",
            sl1: "-",
            jldw2: "-",
            sl2: "-",
        });
    }
});

console.log(tableData)*/


const calculateFunc = (p12,p23)=>{

}

console.log(parseFuncParams(calculateFunc))