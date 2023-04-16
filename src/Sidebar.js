import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import {
	Star,
	AccessTime,
	ExpandMore,
	LabelImportant,
	NearMe,
	Note,
	Person,
	Duo,
	Phone,
} from '@mui/icons-material';

// if one icon in import we have to say blablaIcon but if all at once we dont have to say icon we just say blabla

function Sidebar() {
	return (
		<div className='sidebar'>
			<Button
				className='sidebar__compose'
				startIcon={<AddIcon fontSize='large' />}
			>
				Compose
			</Button>

			<SidebarOption
				Icon={InboxIcon}
				title='inbox'
				number={54}
				selected={true}
			/>
			<SidebarOption Icon={Star} title='Starred' number={54} />
			<SidebarOption Icon={AccessTime} title='Snoozed' number={54} />
			<SidebarOption Icon={LabelImportant} title='Important' number={54} />
			<SidebarOption Icon={NearMe} title='Sent' number={54} />
			<SidebarOption Icon={Note} title='Drafts' number={54} />
			<SidebarOption Icon={ExpandMore} title='More' number={54} />
			<div className='sidebar__footer'>
				<div className='sidebar__footerIcons'>
					<IconButton>
						<Person />
					</IconButton>
					<IconButton>
						<Duo />
					</IconButton>
					<IconButton>
						<Phone />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
