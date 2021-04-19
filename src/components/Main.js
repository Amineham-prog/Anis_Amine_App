import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import {Switch, Route, Redirect } from 'react-router-dom';



const Main = ()=> {

  return(
  <React.Fragment>  
<Header />
<Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/contactus' component={Contact}  />
              <Redirect to='/home' />
        </Switch>

</React.Fragment> 
  )
}



export default Main;


//-----------------Commit to Single Page 2 --------------------------