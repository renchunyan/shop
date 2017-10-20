/**
 * Created by 123 on 2017/9/28.
 */
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var url = require('url');
var webserver = require('gulp-webserver');
gulp.task('tabServer',function(){
    gulp.src('./')
        .pipe(webserver({
            port:8090,//端口
            host:"localhost",
            livereload:true,//自动刷新
            directoryListening:{
                path:'./',
                enable:true
            },//监听
            open:true,//自动打开
            middleware:function (req,res,next) {
                var urlobj = url.parse(req.url,true);
          var getFile = path.join(__dirname,'Data',urlobj.search.split("?")[1]+".json");
                fs.exists(getFile, function (exists) {
                    if (!exists) {
                        var data = {
                            isSuccess : false,
                            error: "can't find this file:" + urlobj.search.split("?")[1]+"                              .json"
                        };
                        res.writeHead(404,{"Content-Type": "text/json;chatset=utf8"});
                        res.end(JSON.stringify(data));
                    } else {
                        fs.readFile(getFile, function (err, data) {
                            if (err) {return err.message};
                            var data = data.toString();
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=utf8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(data);
                        })
                    }
                })
            }
        }))
});
