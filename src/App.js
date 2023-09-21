import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Company from './components/Company/Company';
import BrandsContainer from './components/BrandsContainer/BrandsContainer';
import Minda from './components/Minda/Minda';
import Corrpal from './components/Corrpal/Corrpal';
import Vistron from './components/Vistron/Vistron';
import CheckScroll from './CheckScroll';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        < Header />
        
        <div className='content'>
          <CheckScroll />
          <Routes >
            
            <Route path='/' element={< Home />} />
              
            <Route path='/company' element={< Company />} />

            <Route path='/Minda' element={< Minda />} />
            <Route path='/Corrpal' element={< Corrpal />} />
            <Route path='/Vistron' element={< Vistron />} />

            <Route path='/:brand' element={< BrandsContainer />} />
            
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </div>
        < Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
