import React , { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import Detail from './Detail'
import Footer from './Footer'
import {Switch, Route, Redirect } from 'react-router-dom';

//------------Match item and direct to Detail component -------
const MenuId = ({ match }) => {
  return (
  <Detail itemid={match.params.userid} />
  );
};
//-----------------------------------------------------------






const Main = ()=> {

  return(
  <React.Fragment>  
<Header />
<Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path="/menu/:userid" component={MenuId} />
              <Route exact path='/contactus' component={Contact}  />
            
              <Redirect to='/home' />
        </Switch>
        <Footer />
</React.Fragment> 
  )
}



export default Main;


//-----------------Commit to Single Page 2 --------------------------