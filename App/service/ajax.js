/**
 * Created by 123 on 2017/10/10.
 */
//自定义封装ajax服务
/*app.factory("ajaxServer", ["$http","$q", function ($http, $q) {
 return {
 ajax: function (type, url) {
 var defer = $q.defer();
 var config = {
 url: url,
 method: type
 };
 $http(config)
 .then(function (data) {
 defer.resolve(data.data);
 },function (error) {
 defer.reject(error);
 });
 return defer.promise;
 }
 }
 }]);*/

//自定义得到ajax数据

app.factory("ajaxServer", ["$http","$q", function ($http, $q) {
    return {
        ajax: function (type, url, data) {
            var defer = $q.defer();
            if (type == "JSONP") {
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (res) {
                        defer.resolve(res);
                    }, error: function (err) {
                        defer.reject(err);
                    }
                });
                return defer.promise;
            } else {
                $http({
                    method: type || "get",
                    url: url,
                    data: data || null
                }).then(function (data) {
                    defer.resolve(data.data);
                },function (error) {
                    defer.reject(error);
                });
            }
            return defer.promise;
        }
    };
}]);