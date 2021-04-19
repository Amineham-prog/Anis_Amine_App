import React, { Component} from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,CardImg,Button
  } from 'reactstrap';

//---------------------data Form --------------------------------
const items = [
    {
    id:"0",
    name: "Menu0",
    description: "Some quick example text to build on the card title .",
    price: "1€",
    image: "img/m1.png",
    category: "Menu",
    comments:[{
                    Author:"Amine",
                    Comment:"I recommend this Menu"
                },
            {
                    Author:"Anis",
                    Comment:"I recommend this Menu"

            }
                ]
    },
    {
        id:"1",
        name: "Menu1",
        description: "Some quick example text to build on the card title .",
        price: "2€",
        image: "img/m2.png",
        category: "Menu",
        comments:[{
                        Author:"Amine",
                        Comment:"I recommend this Menu"
                     },
                 {
                        Author:"Anis",
                        Comment:"I recommend this Menu"
    
                 }
    ]
        },
  
        {
            id:"2",
            name: "Menu2",
            description: "Some quick example text to build on the card title.",
            price: "3€",
            image: "img/m3.png",
            category: "Menu",
            comments:[{
                            Author:"Amine",
                            Comment:"I recommend this Menu"
                         },
                     {
                            Author:"Anis",
                            Comment:"I recommend this Menu"
        
                     }
        ]
            }
  ];
  //--------------------------------------------------------------------------------


function CardMenu({item}){
    console.log(item.name)
    return(
        <Card className="mycard">
        <CardImg className="photo" top  src= {item.image} alt="Card image cap" />
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
              <Button className="btn btn btn-success float-right" style={{border:'1px solid #ffffff'} }>
          <span class="fa fa-sign-in"></span> View 
              </Button>
              </div>
          </div>
          
        </CardBody>
      </Card>
    )
}

const Menu=()=>{
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
