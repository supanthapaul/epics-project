var Diary = require("./diaryModel");

// get all diaries
exports.getAll = (req, res) => {
	Diary.get((err, diaries) => {
		if (err) {
			res.json({
				status: "Error",
				message: err
			});
		}
		res.json({
			status: "Success",
			message: "Diaries retrieved successfully",
			data: diaries
		})
	})
}

// {URL}/api/diary {header: uid}
exports.getByUid = (req, res) => {
	let uid = req.headers.uid;
	Diary.findOne({ uid: uid }, (err, diary) => {
		if (err) {
			res.json({
				status: "Error",
				message: err
			});
		}

		if (diary) {
			res.json({
				status: "Success",
				message: "Diary retrieved for " + uid,
				data: diary
			})
		}
		else {
			res.json({
				status: "Success",
				message: "No entries found for " + uid,
			})
		}
	})
}

// POST
// {URL}/api/diary {header: uid, body: newEntry}
exports.addNewEntry = (req, res) => {
	let uid = req.headers.uid;
	let newEntry = req.body;

	Diary.findOne({uid: uid}, (err, data) => {
		if (err) {
			res.json({
				status: "Error",
				message: err
			});
		}
		// If user id exists, add entry to the collection
		if(data) {
			Diary.findOneAndUpdate({ uid: uid }, {
				$push: {
					entries: {
						$each: [newEntry]
					}
				}
			}, { returnDocument: true }, (err, diary) => {
				if (err) {
					res.json({
						status: "Error",
						message: err
					});
				}
		
				res.json({
					status: "Success",
					message: "New entry added for " + uid,
					data: diary
				})
			})
		}
		else {
			// if a collection with the uid doesn't exist, create a new one with the first entry
			let newDoc = {
				uid,
				entries: [
					newEntry
				]
			}
			Diary.create(newDoc, (err, data) => {
				if (err) {
					res.json({
						status: "Error",
						message: err
					});
				}

				res.json({
					status: "Success",
					message: "New entry added for " + uid,
					data: data
				})
			});
		}
	})
}

// PUT
// {URL}/api/diary {header: uid, body: updatedEntry}
exports.updateEntry = (req, res) => {
	let uid = req.headers.uid;
	let updatedEntry = req.body;

	Diary.findOneAndUpdate({ uid: uid }, {
		$set: {
			"entries.$[elem].content": updatedEntry.content,
		},
		
	}, { arrayFilters: [{ "elem.date": updatedEntry.date }], returnDocument:true }, (err, diary) => {
		if (err) {
			res.json({
				status: "Error",
				message: err
			});
		}

		res.json({
			status: "Success",
			message: "Entry updated for " + uid,
			data: diary
		})
	})
}