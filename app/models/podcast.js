var mongoose = require('mongoose');

module.exports = mongoose.model('Podcast', {
  name : {type : String, default: ''}/*,
  category : {type : String, default: ''},
  added : {type : Date, default: ''},
  release : {type : String, default: ''}*/
});
