import React from 'react'
import { Link } from 'react-router-dom'


function Sidebarteacher() {
  return (
    <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to='/dashteacher' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/mycoursesteacher' className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to='/addcourseteacher' className='list-group-item list-group-item-action'>addcourse</Link>
                <Link to='/myuserteacher' className='list-group-item list-group-item-action'>myusers</Link>
                <Link to='/profilesettingteacher' className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to='/changepassteacher' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/' className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
    </div>
 
    

  )
}

export default Sidebarteacher