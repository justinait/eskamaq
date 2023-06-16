import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Company from './components/Company/Company';
import Brands from './components/Brands/Brands';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        < Header />
        <div className='content'>

          <Routes >
            
            <Route path='/' element={< Home />} />
              
            <Route path='/contact' element={< Contact />} />
            
            <Route path='/company' element={< Company />} />

            <Route path='/brands' element={< Brands />} />

          </Routes>
        </div>
        < Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
