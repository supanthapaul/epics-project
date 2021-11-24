var mongoose = require('mongoose');
// Setup schema
var diarySchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    entries: {
        type: Array,
        required: true
    },
});
// Export Diary model

var Diary = module.exports = mongoose.model('diary', diarySchema);

module.exports.get = function (callback, limit) {
	Diary.find(callback).limit(limit);
}