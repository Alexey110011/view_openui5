sap.ui.define({}, function(){
    "use strict";
    return {
        filterLang: function(data){
            var a = [];
            for (var i = 0; i<data.length; i++){
                if(a.indexOf(data[i])=== -1){
                    a.push(data[i])
                }
            }
            return a
        }
    }
});