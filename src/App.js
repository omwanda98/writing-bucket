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
import Howitworks from './Pages/Howitworks';

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
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
