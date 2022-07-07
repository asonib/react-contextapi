
import React, { useContext } from 'react';
import { AppContext } from '../context';
import User from './User';

const UserList = () => {
	const { users } = useContext(AppContext);
	return (
		<div>
			<h3>Available Users</h3>
			{users.map(user => <User key={user.id} user={user} />)}
		</div>
	);
};

export default UserList;