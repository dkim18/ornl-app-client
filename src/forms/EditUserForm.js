import React, { useState, useEffect } from 'react'


const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)
 
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
 
  const handleInputChange = event => {
    
    const { name, value } = event.target   
    setUser({ ...user, [name]: value })   
  
  }
  

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        
        if (!user.last_name || !user.first_name || !user.height|| !user.age|| !user.gender ){					          
					return
        } 
              
        props.updateUser(user.id, user)
      }}
    >
      <label>Last Name</label>
      <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange} />
      <label>First Name</label>
      <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange} />
      <label class="required">Height (75-180 cm)</label>
      <input type="number" min="75" max="180" name="height" value={user.height} onChange={handleInputChange} required />
      <label class="required">Age (24-240 months)</label>
      <input type="number" min="24" max="240"  name="age"  onChange={handleInputChange} value={user.age}  required/>     
      <label class="required">Gender (1/2 : boy/girl)</label>     
      <input type="number" min="1" max="2" name="gender" value={user.gender} onChange={handleInputChange} required />           
      <button>Update Child</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
