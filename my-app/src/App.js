import './App.css';
import Coursescard from './Coursescard';
import Latestcourse from './Latestcourse';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Login from './User/Login';
import Register from './User/Register';

import Mycourses from './User/Mycourses';
import Favoritecourses from './User/Favoritecourses';
import Recomendedcourses from './User/Recomendedcourses';
import Profilesetting from './User/Profilesetting';
import Changepassword from './User/Changepassword';
import Dashboard from './User/Dashboard';
import Sidebar from './User/Sidebar';
import Sidebarteacher from './Teacher/Sidebarteacher';
import Addcourseteacher from './Teacher/Addcourseteacher';
import Changepasswordteacher from './Teacher/Changepasswordteacher';
import Dashboardteacher from './Teacher/Dashboardteacher';
import Loginteacher from './Teacher/Loginteacher';
import Mycoursesteacher from './Teacher/Mycoursesteacher';
import Myusers from './Teacher/Myusers';
import Profilesettingteacher from './Teacher/Profilesettingteacher';

import Allcourses from './Allcourses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Categorycourses from './Categorycourses';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/latestcourse' element={<Latestcourse/>}/>
      <Route path='/populorcourse' element={<Coursescard/>}/>
      <Route path='/loginuser' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/mycourses' element={<Mycourses/>}/>
      <Route path='favorite' element={<Favoritecourses/>}/>
      <Route path='recommented' element={<Recomendedcourses/>}/>
      <Route path='profile' element={<Profilesetting/>}/>
      <Route path='changepassword' element={<Changepassword/>}/>
      <Route path='sidebar' element={<Sidebar/>}/>
      <Route path='sidebarteacher' element={<Sidebarteacher/>}/>
      <Route path='addcourseteacher' element={<Addcourseteacher/>}/>
      <Route path='changepassteacher' element={<Changepasswordteacher/>}/>
      <Route path='dashteacher' element={<Dashboardteacher/>}/>
      <Route path='Loginteacher' element={<Loginteacher/>}/>
      <Route path='mycoursesteacher' element={<Mycoursesteacher/>}/>
      <Route path='myuserteacher' element={<Myusers/>}/>
      <Route path='profilesettingteacher'element={<Profilesettingteacher/>}/>
      {/* <Route path='registerteacher' element={<Registerteacher/>}/> */}
      <Route path='allcourse' element={<Allcourses/>}/>
      <Route path='courscard' element={<Coursescard/>}/>
      <Route path='Latestcourse' element={<Latestcourse/>}/>
      <Route path='/category/:categoty_slug' element={<Categorycourses/>}/>
 

     
      </Routes>
      <Footer/>
     </BrowserRouter>
      
    

    </div>
  );
}

export default App;
