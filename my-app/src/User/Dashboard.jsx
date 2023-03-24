import React from 'react'
import Sidebar from 'react-sidebar'
 

function Dashboard() {
  return (
    <div>
         <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                    Dashboard
                </section>
            </div>

        </div>
    </div>
  )
}

export default Dashboard