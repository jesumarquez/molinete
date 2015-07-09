exports.list = function(req, res){
    var path = require("path");
    res.sendFile(path.join(__dirname, '../public/js/app/hours', 'hours.json'));
};