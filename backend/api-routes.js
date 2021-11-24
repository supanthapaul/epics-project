let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to epics-vit API'
    });
});

var diaryController = require('./diary/diaryController');

// Diary routes
router.route('/diaries')
    .get(diaryController.getAll)
router.route('/diary')
    .get(diaryController.getByUid)
		.post(diaryController.addNewEntry)
		.put(diaryController.updateEntry)

// Export API routes
module.exports = router;