/**
 * Created by fujunou on 2015/3/6.
 */

module.exports = {
    urlObj: {
        server_url: "http://192.168.232.130/geometryserver"
    },

    extend: function(target, source, flag) {
        for (var key in source) {
            if (source.hasOwnProperty(key))
                flag ?
                (target[key] = source[key]) :
                (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    getParamsString: function(params) {
        var str = "";
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    str += key + "=" + params[key] + "&";
                }
            }
            return str.substring(0, str.lastIndexOf("&"));
        }
        return str;
    },

    dateFormat: function(currentDate) {
        var date = new Date(currentDate);
        var fmt = "yyyy-MM-dd";
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }

        return fmt;
    },
    getDataArray: function(dataObj) {
        var paramsArray = [];
        for (var key in dataObj) {
            if (dataObj.hasOwnProperty(key)) {
                paramsArray.push(dataObj[key]);
            }
        }
        return paramsArray;
    },
    //解决跨域问题
    setHeader: function(response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Credentials', true);
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    }
}