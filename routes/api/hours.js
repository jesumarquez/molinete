module.exports = function(app){
    var hours = require('../../controllers/hours');
    app.get('/api/hours', hours.list);
};