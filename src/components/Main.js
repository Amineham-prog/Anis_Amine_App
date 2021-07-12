import React , { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import Detail from './Detail'
import Footer from './Footer';
import ITEMS from '../data/ITEMS';
import CAROUSSEL from '../data/CAROUSSEL'

import {Switch, Route, Redirect } from 'react-router-dom';




//----------Main Component here ----------------------
class Main extends Component {
  constructor(props){
  super(props);
  this.state={
    items: ITEMS,
   caroussel: CAROUSSEL,
  };

  }
render(){

  
  //------------Match item and direct to Detail component -------
const detailId = ({ match }) => {
  return (
  <Detail item={this.state.items.filter((item)=>item.id===match.params.userid)[0]} />
  );
};
//-----------------------------------------------------------





//---------------Match Categories and direct---------------------
const MenuCat = ({ match }) => {
  if(match.params.categories==="all")
  {
    return(<Menu items={this.state.items}/>)
  }
  else{
    return (
      <Menu items={this.state.items.filter((item)=>item.category===match.params.categories)} />
      );
  }}
//--------------------------------------------------------------------------------------------





//---------------------React Router here ---------------------------------------------------
return(
<React.Fragment>  
<Header />
<Switch>
              <Route path='/home' component={() => <Home images={this.state.caroussel} />} />
              <Route exact path='/menu/:categories' component={MenuCat} />
              <Route exact path="/detail/:userid" component={detailId} />
              <Route exact path='/contactus' component={Contact}  />
            
              <Redirect to='/home' />
        </Switch>
        <Footer />
</React.Fragment> 

)}}
//----------------------------------------------------











export default Main;


//-----------------Commit to Single Page 2 --------------------------