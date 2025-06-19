import {BrowserRouter as Router} from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <AllRoutes />
        <Footer/>
      </Router>
    </>
  )
}

export default App
