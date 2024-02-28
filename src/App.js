
import './App.css';
import { Route,Routes } from 'react-router-dom';
import THome from './pages/THome';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import UserMain from './pages/UserMain';
import UserDashboard from './pages/UserDashboard';
import UserReview from './pages/UserReview';
import AdminDashboard from './pages/AdminDashboard';
import Userinfosub from './pages/Userinfosub';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<THome/>}/>
      <Route path='/login' element={<Auth />}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/Usermain' element={<UserMain/>}/>
      <Route path='/Userdash' element={<UserDashboard/>}/>
      <Route path='/Userreview' element={<UserReview/>}/>
      <Route path='/Admindash' element={<AdminDashboard/>}/>
      <Route path='/Userinfo' element={<Userinfosub/>}/>

      </Routes>
      <Footer/>
      <ToastContainer/>
      

     
    </div>
  );
}

export default App;
