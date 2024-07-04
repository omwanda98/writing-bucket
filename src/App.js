import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Faq from './Pages/Faq';
import PlagiarismChecker from './Pages/PlagiarismChecker';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import About from './Pages/About';
import Order from './Pages/Order';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import Howitworks from './Pages/Howitworks';
import ForgotPassword from './Pages/ForgotPassword';
import Book from './Pages/Book';
import Essay from './Pages/Essay';
import Dissertation from './Components/Dissertation/Dissertation';
import CustomReviews from './Pages/CustomReviews';
import Programming from './Pages/Programming';
import Asssignment from './Pages/Assignment';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/home' element={<Home/>}/> */}
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/services' element={<Services/>}/> */}
            <Route path='/howitworks' element={<Howitworks/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/plagiarism' element={<PlagiarismChecker/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<LoginSignup/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path='/order' element={<Order/>}/>
            <Route path='/book-review' element={<Book/>}/>
            <Route path='/essay' element={<Essay/>}/>
            <Route path='/dissertation' element={<Dissertation/>}/>
            <Route path='/custom-review' element={<CustomReviews/>}/>
            <Route path='/programming' element={<Programming/>}/>
            <Route path='/assignment' element={<Asssignment/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
