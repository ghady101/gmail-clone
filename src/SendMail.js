import React from 'react';
import './SendMail.css';
import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {
	const dispatch = useDispatch();
	// const { register, handleSubmit, watch, errors } = useForm();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className='sendMail'>
			<div className='sendMail__Header'>
				<h3>New Message</h3>
				<Close
					className='sendMail__close'
					onClick={() => dispatch(closeSendMessage())}
				/>
			</div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<input
					name='to'
					placeholder='To'
					type='text'
					{...register('to', { required: true })}
				/>
				{errors.to && <p className='sendMail__error'>To is required</p>}
				<input
					name='subject'
					placeholder='Subject'
					type='text'
					{...register('subject', { required: true })}
				/>
				{errors.subject && (
					<p className='sendMail__error'>Subject is required</p>
				)}
				<input
					name='message'
					className='sendMail__message'
					placeholder='Message...'
					type='text'
					{...register('message', { required: true })}
				/>
				{errors.message && (
					<p className='sendMail__error'>Message is required</p>
				)}
				<div className='sendMail__options'>
					<Button
						className='sendMail__send'
						variant='contained'
						color='primary'
						type='submit'
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
