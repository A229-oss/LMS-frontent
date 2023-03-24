import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to='/dashboared' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/mycourses' className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to='/favorite' className='list-group-item list-group-item-action'>Favourite Courses</Link>
                <Link to='/recommented' className='list-group-item list-group-item-action'>Recommended Courses</Link>
                <Link to='/profile' className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to='/changepassword' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/' className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
    </div>
 
  )
}

export default Sidebar