import React from 'react';
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

function EmailList() {
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
                
            </div>
		</div>
	);
}

export default EmailList;
