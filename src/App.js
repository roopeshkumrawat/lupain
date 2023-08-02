import Navbar from './Componets/Navbar';
import HerroBanner from './Componets/HerroBanner';
import './App.css';
import EstateAgent from './Componets/EstateAgent';
// import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <HerroBanner/>
      <EstateAgent />
      {/* <Routes>
        <Route path='/Navbar' >
      </Routes> */}
    </>
  );
}

export default App;
