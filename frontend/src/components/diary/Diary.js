import React, { useState, useEffect, forwardRef } from 'react'
import { useStoreState } from 'easy-peasy';
import axios from 'axios';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Diary.css'


export const Diary = () => {
	const authState = useStoreState(state => state.auth.user);
	const [currDate, setCurrDate] = useState(new Date());
	const [diary, setDiary] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [currEntry, setCurrEntry] = useState(null);
	const [newEntryDate, setNewEntryDate] = useState(new Date());
	const [newEntryContent, setNewEntryContent] = useState("");
	const headers = {
		'Content-Type': 'application/json',
		'uid': 'QviMth5sRkOI1H66ZeTcAnM1pw63'
	}

	const getDiary = () => {
		axios.get(`http://localhost:8000/api/diary`, { headers: headers })
			.then(res => {
				const diary = res.data;
				setDiary(diary);
				getDiaryOfDate(res.data);
			})
	}
	const submitNewEntry = (e) => {
		e.preventDefault();
		const date = newEntryDate.toLocaleDateString("en-US");
		const content = newEntryContent.trim();
		if(!content) {
			alert("Please write something before submitting");
			return;
		}

		axios.post('http://localhost:8000/api/diary', {
			date,
			content
		}, {
			headers: headers
		})
		.then((response) => {
			getDiary();
			alert("Entry added! 💭");
		})
		.catch((error) => {
			console.log(error)
		})

	}
	useEffect(() => {
		getDiary();
		getDiaryOfDate(diary);
	}, []);

	useEffect(() => {
		getDiaryOfDate(diary);
	}, [currDate]);

	const getDiaryOfDate = (diary) => {
		const dateStr = currDate.toLocaleDateString("en-US");
		if (diary) {
			diary.data.entries.forEach(el => {
				if (el.date == dateStr) {
					setCurrEntry(el);
				}
			})
		}
	}
	const CustomDatePicker = forwardRef(({ value, onClick }, ref) => (
		<div type="text"
			name="entry-title"
			id="entry-title"
			className="entry-text-title"
			placeholder="Name of entry ✏️"
			onClick={onClick} ref={ref}>
			{value}
		</div>
	));
	return (
		<div className="container">
			<h3 className="diary-page-title">Welcome, {authState.name}!</h3>
			<label>Date: <ReactDatePicker
								selected={currDate}
								onChange={(date) => setCurrDate(date)}
								customInput={<CustomDatePicker />}
							/></label>
			<button className="diary-btn" style={{ marginLeft: 8 }} onClick={e => setShowForm(!showForm)}>{showForm ? "Close Form" : "Add New Entry"}</button>
			{
				showForm && (
					<div>
						<form id="entryForm" action="">
							<label for="entry-title" class="journal-label">Entry Date</label>
							<br />
							{/* <input
                type="text"
                name="entry-title"
                id="entry-title"
                className="entry-text-title"
                placeholder="Name of entry ✏️"
              /> */}
							<ReactDatePicker
								selected={newEntryDate}
								onChange={(date) => setNewEntryDate(date)}
								customInput={<CustomDatePicker />}
							/>
							<br />
							<label for="entry" class="journal-label">Today's Entry</label>
							<br />
							<textarea
								name="daily-entry"
								id="entry"
								className="entry-text-box"
								placeholder="What's on your mind today? 💭"
								required
								value={newEntryContent}
								onChange={e => setNewEntryContent(e.target.value)}
							></textarea>
							<br />
							<button class="btn-main entry-submit-btn diary-btn" onClick={submitNewEntry} type="submit">Submit</button>
						</form>
					</div>
				)
			}
			{/* {`${diary.data.entries[0].content}`} */}
			<div className="diary-container">
				<div className="diary">
					<h3 className="diary-title">Diary Entry, {currEntry ? (
						currEntry.date
					) : ""}</h3>
					<p className="diary-content">
						{currEntry ? (
							currEntry.content
						) : ""}
					</p>
				</div>
			</div>
		</div>
	)
}
