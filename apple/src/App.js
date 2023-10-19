import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Store from './Components/Store';
import Applebuypage from './Components/Applebuypage';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Applecart from './Components/Applecart';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/applebuypage' element={<Applebuypage/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/applecart' element={<Applecart/>} />

      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;