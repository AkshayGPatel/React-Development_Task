import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';
import { v4 as uuid } from 'uuid';

let usersList = [];
const AddUser = () => {

	//create varible 
	const [getName, setFirstName] = useState('');
    const [getAge, setAge] = useState('');
	
	//for submit event
    const clickSubmit = event => {
		//create unique id for each user
		const u_id = uuid();
		//add new value in list by inbuild push function 
		usersList.push ({
			id: u_id,
			name: getName,
			age:getAge
		});
		event.preventDefault(); 
		// clear textbox after assign
		setFirstName('');
		setAge('');
   	 };
	
	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={clickSubmit} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text"  value={getName} required onChange={event => setFirstName(event.target.value)} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={getAge} required onChange={event => setAge(event.target.value)} />
					<Button type="submit" className={classes.submit}>
						Add User
					</Button>
				</form>
			</Card>
			<UsersList users={usersList} />
		</div>
	);
};

export default AddUser;
