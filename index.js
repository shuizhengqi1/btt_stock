const iconv = require("iconv-lite");
const request = require('request')
const express = require('express')
const app = express()

app.get('/stock', (req, response) => {

    var url = "https://hq.sinajs.cn/list=s_" + req.query.stockCode
    request({
        url: url,
        encoding: null
    }, (err, res, body) => {
        if (body != null) {
            var result = iconv.decode(body, 'GBK')
            var resultList = result.split(',')
            response.send(resultList[1]+",涨幅："+resultList[3])

        }
    })
})

app.listen(2000)