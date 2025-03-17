
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>} />
        <Route path='/men' element={<shopCategory category="men"/>} />
        <Route path='/women' element={<shopCategory category="women"/>} />
        <Route path='/kids' element={<shopCategory category="kids"/>} />
        <Route path="/product" element={<product/>}>
        <Route path=':productID' element={<product/>}/>

        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginSignup/>}/>

        </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
