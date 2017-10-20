app.factory("tabServer" , function (ajaxServer) {
    var tabServer = {
        getNewList: function () {
            return ajaxServer.ajax("get","http://localhost:8090?tab")
        },
        getNewLists: function () {
            return ajaxServer.ajax("get","http://localhost:8090?tab1")
        }
    };
    return tabServer;
});
