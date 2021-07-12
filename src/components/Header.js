import React, { Component} from 'react';
import { Navbar, 
        NavbarBrand, 
        Nav, NavbarToggler,
        Collapse, NavItem,
        Button,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,} from 'reactstrap';
import { NavLink } from 'react-router-dom';






//-------------------------------HEADER -----------------------------------

class Header extends Component {
constructor(props){
super(props);
this.state={
isNavOpen: false
}
this.toggleNav=this.toggleNav.bind(this);

}

toggleNav(){
this.setState({isNavOpen: !this.state.isNavOpen})
}

render(){
return(//-------------------------Navbar -----------
<div>

<Navbar className="navbar navbar-dark navbar-expand-md fixed-top">

        <div className="container">
        <NavbarToggler   onClick={this.toggleNav}  />
        
        
        <NavbarBrand className="rounded float-left" href="/"><img src="/img/1592953737104.jfif" class="rounded-circle" height="60" width="60"
        alt="Ristorante Con fusion"               
        />
        </NavbarBrand>
        
        <Collapse isOpen ={this.state.isNavOpen} navbar>
        <Nav navbar>

        <NavItem>
        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar >
              <DropdownToggle  nav caret  >
      <span className="fa fa-list fa-lg"></span> Menu
              </DropdownToggle>
              <DropdownMenu right className='test'>
                <DropdownItem className='item'>
                <NavLink className="nav-link"  to='/menu/Menu'>Menu</NavLink>
                </DropdownItem>
                <DropdownItem className='item'>
                <NavLink className="nav-link"  to='/menu/dessert'>Dessert</NavLink>
                </DropdownItem>
                <DropdownItem  divider />
                <DropdownItem className='item'>
                <NavLink className="nav-link"  to='/menu/all'> ALL</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
        <NavItem>
        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
        </NavItem>

        </Nav>
        <Nav className="ml-auto" navbar>

        <NavItem>
        <Button style={{color: "#FFFFFF"}}className="btn-success" outline onClick={this.toggleModal} >
        <span className="fa fa-sign-in fa-lg"></span> Login
        </Button>

        </NavItem>

        </Nav>
        </Collapse>
       
        </div>                          
        </Navbar>

</div>

        )
        }
}
//--------------------------------------------------------------------------------------

export default Header;