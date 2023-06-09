import React, { useEffect, useState } from 'react';
import './EmailList.css';
import {
	ArrowDropDown,
	CheckBox,
	ChevronLeft,
	ChevronRight,
	Inbox,
	KeyboardHide,
	LocalOffer,
	MoreVert,
	People,
	Redo,
	Settings,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
	const [emails, setEmails] = useState();
	useEffect(() => {
		db.collection('emails')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	return (
		<div className='emailList'>
			<div className='emailList__Settings'>
				<div className='emailList__SettingsLeft'>
					<CheckBox />
					<IconButton>
						<ArrowDropDown />
					</IconButton>
					<IconButton>
						<Redo />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className='emailList__SettingsRight'>
					<IconButton>
						<ChevronLeft />
					</IconButton>
					<IconButton>
						<ChevronRight />
					</IconButton>
					<IconButton>
						<KeyboardHide />
					</IconButton>
					<IconButton>
						<Settings />
					</IconButton>
				</div>
			</div>
			<div className='emailList__sections'>
				<Section Icon={Inbox} title='Primary' color='red' selected />
				<Section Icon={People} title='Social' color='#1A73E8' />
				<Section Icon={LocalOffer} title='Promotions' color='green' />
			</div>

			<div className='emailList__list'>
				{emails.map(({ id, data: { to, subject, message, timestamp } }) => {
					<EmailRow
						id={id}
						key={id}
						title={to}
						subject={subject}
						description={message}
						time={new Date(timestamp?.seconds * 1000).toUTCString()}
					/>;
				})}
				{/* 
				<EmailRow
					title='Github'
					subject='gmail-clone'
					description='this is a test #1'
					time='10pm'
				/>
				<EmailRow
					title='LinkedIn'
					subject='Ghady-profile'
					description='this is a test #2, it is a little bit longer than the previous one to check the message fit'
					time='10pm'
				/>
				<EmailRow
					title='Github'
					subject='gmail-clone'
					description='this is a test'
					time='10pm'
				/> */}
			</div>
		</div>
	);
}

export default EmailList;
