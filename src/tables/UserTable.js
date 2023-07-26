import React from 'react'
import { GROWTH_CHART_URL } from '../forms/Constants'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Height(cm)</th>
        <th>Age in months</th>
        <th>Gender</th>
        <th>Chart Link</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.last_name}</td>
            <td>{user.first_name}</td>
            <td>{user.height}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td><a href={`https://ornl-app-ce4dd35f9511.herokuapp.com/chart/${user.height}/${user.gender}`} target="_blank" rel="noopener noreferrer">Display Chart test </a></td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                //className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                //className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7}>No Data...</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
