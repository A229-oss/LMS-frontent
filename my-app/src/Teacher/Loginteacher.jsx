import { MDBBtn, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'


function Loginteacher() {
  return (
    
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
            <h1>Login</h1>


        <div className="mb-3">
            <label style={{float:"left"}} for="exampleInputEmail1" class="form-label">Username</label>
            <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label style={{float:"left"}} for="exampleInputEmail1" class="form-label">Password</label>
            <input type="text" size='sm' className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp"/>
        </div>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-1" size="lg">Log in</MDBBtn>

         


        </MDBCol>

      </MDBRow>

    </MDBContainer>
    
  )
}

export default Loginteacher