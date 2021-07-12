import React, { Component} from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,CardImg,Button
  } from 'reactstrap';
  import {Link } from 'react-router-dom';
//---------------------data Form --------------------------------



function CardMenu({item}){
   
    return(
        <Card className="mycard">
        <CardImg className="photo" top  src= {`/${item.image}`} alt="Card image cap" />
        <CardBody className="bodycard">
          <CardTitle className="card-title" tag="h5">{item.name}</CardTitle>
          <CardText className="card-text">{item.description}</CardText>
       
          <div className="row">
              <div className="col-6">
              <Button className="btn btn btn-danger float-left" style={{border:'1px solid #ffffff'} }>  
              <span class="fa fa-sign-in"></span> Order 
              </Button>
              </div>
              <div className="col-6">
              
              
              <Link to={`/detail/${item.id}`}>
              <Button className="btn btn btn-success float-right" style={{border:'1px solid #ffffff'} }>
          <span class="fa fa-sign-in"></span> View 
              </Button>
                 </Link>
            
              </div>
          </div>
          
        </CardBody>
      </Card>
    )
}


//---------------Recieve a catrogory of menu and call CardMenu component for display this one -----------
const Menu=({items})=>{
  console.log(items)
    const menu = items.map((item) => {
      
        return (
            
            <div className="col-12 col-sm-6 col-md-4"  key={item.id}>
                <CardMenu item={item} />
            </div>
        );
    });
  return(
    <div className="container">
    <div className="row row-content">
        {menu}
    </div>
</div>


  );


}
export default Menu;
