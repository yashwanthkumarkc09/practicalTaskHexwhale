
var mongojs = require('mongojs');
const dataBase = 'mongodb://localhost:27017/trailData';

module.exports = {
    url: mongojs(dataBase, [])
}