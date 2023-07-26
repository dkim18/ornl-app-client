import React, { useState } from 'react'


const AddUserForm = props => {
	const initialFormState = { id: null, last_name: '', first_name: '', height: '', age: '', gender: '' }
	const [ user, setUser ] = useState(initialFormState)	

	const handleInputChange = event => {
		const { name, value } = event.target //name --> attribute

		setUser({ ...user, [name]: value })
	}

	return (
		//Add new child form
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.height|| !user.age|| !user.gender ){
					
					return
				} 
				
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Last Name</label>
			<input type="text" name="last_name" value={user.last_name} onChange={handleInputChange} />
			<label>First Name</label>
			<input type="text" name="first_name" value={user.first_name} onChange={handleInputChange} />
			<label class="required">Height (75-180 cm)</label>
			<input type="number" min="75" max="180" name="height" value={user.height} onChange={handleInputChange} required />
			<label class="required">Age (24-240 months)</label>
			<input type="number" min="24" max="240"  name="age" value={user.age} onChange={handleInputChange}  required/>     
			<label class="required">Gender (1/2 : boy/girl)</label>
			<input type="number" min="1" max="2" name="gender"  value={user.gender} onChange={handleInputChange}  required/>
			<br/>
			<button>Add Child</button>
		</form>
	)
}

export default AddUserForm
