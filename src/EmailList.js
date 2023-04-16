import React from 'react';
import './EmailList.css';
import {
	ArrowDropDown,
	CheckBox,
	ChevronLeft,
	ChevronRight,
	KeyboardHide,
	MoreVert,
	Redo,
	Settings,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
            <div className="emailList__sections">
                
            </div>
		</div>
	);
}

export default EmailList;
