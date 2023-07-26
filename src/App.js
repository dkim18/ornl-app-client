import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	
	//Initial data
	const usersData = [
		{id: 1, last_name : 'McGregor', first_name:'Ava', height: 90, age: 28, gender: 2},
		{id: 2, last_name : 'Lopez', first_name:'Eloise', height: 95, age: 43, gender: 2},
		{id: 3, last_name : 'Morrow', first_name:'Luke', height: 157, age: 160, gender: 1},
		{id: 4, last_name : 'Paxton', first_name:'Chris', height: 170, age: 226, gender: 1},
		{id: 5, last_name : 'Kim', first_name:'Yura', height: 101, age: 37, gender: 2}
	]


  
	const initialFormState = { id: null, last_name: '', first_name: '', height:'', age:'', gender:'' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, last_name: user.last_name, first_name: user.first_name, height:user.height, age:user.age, gender:user.gender })
	}

	return (
		

		<div className="container">
			<header>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark">
		
				</nav>
	    	 </header>
			<h1>Growth Chart List</h1>			
			<div className="flex-row">

				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Child</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Child</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>

				<div className="flex-basis">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>

				<div className="flex-grow">
					<h2>Chart List</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
		
	)
}

export default App
