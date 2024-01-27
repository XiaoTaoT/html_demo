/**
 @ClassName:index.js
 @Author:TwT
 @Date:2023/1/10 14:34
 @Version:1.0
 **/
const https = require('https');
const axios = require('axios')
const fs = require('fs')

// D:\JYYH\2021\svn\大数据产品\08.移动门户平台\trunk\03.产品源码\hfoffice\webapp\hfoffice-pad\public\e47ee07f62f1fe66.p12
const certPath = 'D:\\JYYH\\2021\\svn\\大数据产品\\08.移动门户平台\\trunk\\03.产品源码\\hfoffice\\webapp\\hfoffice-pad\\public\\e47ee07f62f1fe66.p12'
const certPwd = '123456'
const certPfx = fs.readFileSync(certPath)
console.log(certPfx)
let httpsAgent = new https.Agent({
    pfx:certPfx,
    passphrase: certPwd,
    rejectUnauthorized: false
});
let config = {
    url: 'https://192.168.74.167/api/portal/queryLoginParam',
    method: 'post',
    httpsAgent
}

axios.request(config)
    .then(res => {
        console.log("res========================")
        console.log(res.data)
    })
    .catch(err => {
        console.log("err========================")
        console.log(err.response.data)
    })
