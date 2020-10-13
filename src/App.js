import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Dashboard from './components/pages/Dashboard';
import Addproduct from './components/pages/Addproduct';
import Customerlist from './components/pages/Customerlist';
import Invoicedetail from './components/pages/Invoicedetail';
import Invoicelist from './components/pages/Invoicelist';
import Materialize from './components/pages/Materialize';
import Menucatalogue from './components/pages/Menucatalogue';
import Menugrid from './components/pages/Menugrid';
import Menulist from './components/pages/Menulist';
import Orders from './components/pages/Orders';
import Productdetail from './components/pages/Productdetail';
import Restaurantlist from './components/pages/Restaurantlist';




function App() {
  return (
    <Router>
      <Preloader/>
      <Switch>
        <Route exact path="/" component={Dashboard} />   
        <Route path="/add-product" component={Addproduct} />  
        <Route path="/customer-list" component={Customerlist} />
        <Route path="/invoice-detail" component={Invoicedetail} />
        <Route path="/invoice-list" component={Invoicelist} />
        <Route path="/materialize" component={Materialize} />
        <Route path="/menu-catalogue" component={Menucatalogue} />
        <Route path="/menu-grid" component={Menugrid} />
        <Route path="/menu-list" component={Menulist} />
        <Route path="/orders" component={Orders} />
        <Route path="/product-detail" component={Productdetail} />
        <Route path="/restaurant-list" component={Restaurantlist} />           
      
      </Switch>
    </Router>
  );
}

export default App;
