import React from 'react'
import Sidebarteacher from './Sidebarteacher'

function Changepasswordteacher() {
  return (
    <div>
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebarteacher />
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>Change Password</h5>
                    <div className='card-body'>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <hr />
                        <button className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
    
  )
}

export default Changepasswordteacher