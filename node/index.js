'use strict';

const path = require("path");
const express = require("express");
const app = express();

const fs = require('fs');
var csvSync = require('csvsync'); // requiring sync module

//ミドルウエアでstaticパスを追加（ただ、これだけだと直アクセスや無いpathだと動かない）
app.use(express.static(path.join(__dirname, "..", "build")));

app.get('/test',function(req,res){

    const file = 'ondo.txt';
    let data = fs.readFileSync(file);
    let ondo_csv = csvSync.parse(data);
    var ondo_json = {}
    ondo_csv.forEach(surmoMeter => {
        var new_data = {ondo : surmoMeter[1], shitsudo: surmoMeter[2]}
        ondo_json[surmoMeter[0]] = new_data
    });
    res.json(ondo_json)
});

//これを追加（全てをindex.htmlにリダイレクト。いわゆるrewrite設定）
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(3001, () => {
    console.log("server started on port 3001");
});

