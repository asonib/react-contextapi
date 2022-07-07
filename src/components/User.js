import { useContext } from 'react';
import { AppContext } from '../context';

const User = ({ user }) => {
	const { dispatchUserEvent } = useContext(AppContext);

	const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id });
	};
	return (
		<div className="User">
			<h3>{user.name}</h3>
			<h4>{user.age}</h4>
			<div>
				<small>{user.bio}</small>
			</div>

			<button onClick={handleRemoveUser}>Delete user</button>
		</div>
	);
};

export default User;