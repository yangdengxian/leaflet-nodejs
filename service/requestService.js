var $util = require('../util/util');
var http = require('http');
// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

const url = "http://192.168.232.130/geometryserver";

module.exports = {
    buffer: function(req, res, next) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        http.get(url + "/buffer?" + $util.getParamsString(param), function(request, response) {
            var html = '';
            request.on('data', function(data) {
                html += data;
            });
            request.on('end', function() {
                $util.setHeader(res);
                jsonWrite(res, JSON.parse(html));
            });

        });
    },
    selfintersect: function(req, res, next) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
    }
};