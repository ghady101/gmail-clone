import React from 'react';
import './Mail.css';
import { IconButton } from '@mui/material';
import {
	ArrowBack,
	CheckCircle,
	Delete,
	Email,
	Error,
	ExitToApp,
	LabelImportant,
	MoreVert,
	MoveToInbox,
	Print,
	UnfoldMore,
	WatchLater,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Mail() {
	const navigate = useNavigate();
	return (
		<div className='mail'>
			<div className='mail_tools'>
				<div className='mail_toolsLeft'>
					<IconButton onClick={() => navigate('/')}>
						<ArrowBack />
					</IconButton>

					<IconButton>
						<MoveToInbox />
					</IconButton>

					<IconButton>
						<Error />
					</IconButton>

					<IconButton>
						<Delete />
					</IconButton>

					<IconButton>
						<Email />
					</IconButton>

					<IconButton>
						<WatchLater />
					</IconButton>

					<IconButton>
						<CheckCircle />
					</IconButton>

					<IconButton>
						<LabelImportant />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className='mail_toolsRight'>
					<IconButton>
						<UnfoldMore />
					</IconButton>
					<IconButton>
						<Print />
					</IconButton>
					<IconButton>
						<ExitToApp />
					</IconButton>
				</div>
			</div>
			<div className='mail__body'>
				<div className='mail__bodyHeader'>
					<h2>Subject</h2>
					<LabelImportant className='mail__important' />
					<p>Title</p>
					<p className='mail__time'>10pm</p>
				</div>
				<div className='mail__message'>
					<p>this is just a test message</p>
				</div>
			</div>
		</div>
	);
}

export default Mail;
