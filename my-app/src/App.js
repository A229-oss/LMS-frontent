import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav1 from './Nav1';
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





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav1/>
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
     
      </Routes>
      <Footer/>
     </BrowserRouter>
      
    

    </div>
  );
}

export default App;
