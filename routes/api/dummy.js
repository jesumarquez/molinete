module.exports = function(app){
    var dummy = require("../../controllers/dummy");
    
    app.get('/dummy', dummy.dummyValue);
}