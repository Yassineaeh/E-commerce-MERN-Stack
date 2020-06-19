import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './Views/HomeScreen';
import ProductScreen from './Views/ProductScreen';
import CartScreen from './Views/CartScreen';
import SigninScreen from './Views/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Views/RegisterScreen';
import ProductsScreen from './Views/ProductsScreen';
import ShippingScreen from './Views/ShippingScreen';
import PaymentScreen from './Views/PaymentScreen';
import PlaceOrderScreen from './Views/PlaceOrderScreen';
import OrderScreen from './Views/OrderScreen';
import ProfileScreen from './Views/ProfileScreen';
import OrdersScreen from './Views/OrdersScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
        </button>
            <Link to="/" >Doc-Pharma</Link>
          </div>
          <div className="header-links">
            <Link to="/cart/:id?">Panier</Link>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Commandes</Link>
                    <Link to="/products">Produits</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Antibactériens</a>
            </li>

            <li>
              <a href="index.html">antidoulereux</a>
            </li>

          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />


          </div>

        </main>
        <footer className="footer">
        Tous droits réservés.
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
