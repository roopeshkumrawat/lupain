import './App.css';
import Navbar from './Componets/Navbar';
// import HerroBanner from './Componets/HerroBanner';
// import EstateAgent from './Componets/EstateAgent';
// import OurPartners from './Componets/OurPartners';
// import NewProperties from './Componets/NewProperties';
// import WhyUseLupain from './Componets/WhyUseLupain';
// import CustomerSay from './Componets/CustomerSay';
import Footer from './Componets/Footer';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'
// import Header from './Componets/Header';
function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      {/* <HerroBanner />
      <EstateAgent />
      <NewProperties />
      <WhyUseLupain />
      <CustomerSay/>
      <OurPartners /> */}
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
