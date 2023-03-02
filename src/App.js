import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { StateProvider } from './StateProvider';
import SignIn from "./components/Signin";
import SignUp from './components/Signup';

function App() {
  console.log("voy aqui")
  return (
    <>
    <StateProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/signin' element={ <SignIn />}/>
            <Route path='/signup' element={ <SignUp />}/>
            <Route path='/' element={ <Productos />}/>
            <Route path='/checkout-page' element={<CheckoutPage />}/>
          </Routes>
        </BrowserRouter>
    </StateProvider>
    </>    
  );
}
export default App;
