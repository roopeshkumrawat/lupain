import Navbar from './Componets/Navbar';
import HerroBanner from './Componets/HerroBanner';
import './App.css';
import EstateAgent from './Componets/EstateAgent';
import OurPartners from './Componets/OurPartners';
// import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <HerroBanner/>
      <EstateAgent />
      <OurPartners/>
      {/* <Routes>
        <Route path='/Navbar' >
      </Routes> */}
    </>
  );
}

export default App;
