import React from 'react';
import './Header.css';
import { IconButton, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					// src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0-852x479.jpg'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail2020.logo.png/799px-Gmail2020.logo.png'
					alt='Double G'
				/>
			</div>
			<div className='header__middle'>
				<SearchIcon />
				<input type='text' placeholder='search email' />
				<ArrowDropDownIcon className='header__imputCaret' />
			</div>
			<div className='header__right'>
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<IconButton>
					<Avatar />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
