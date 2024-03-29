import { useEffect } from "react";
import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { auth } from "./firebase";
import Checkout from "./components/CheckoutForm/Checkout";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Footer from "./components/Footer";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Products />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
