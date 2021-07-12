import React from 'react';
import {Link } from 'react-router-dom';
import {Button}  from 'reactstrap';

const Detail = ({item})=> {
     
        return(
            <div className="container" style={{padding: "20px"}}>
                <div className="row row-content" >
                <div className="col-sm-6">
          
          <form  style={{color: "#ffc947", textAlign:"left", backgroundColor:"#241b18",border:"1px solid  #ffff",padding:"5px"}}>
          <div className="form-group">
          <h1 style={{color: "#ffffff",textAlign:"center"}}><strong>{item.name}</strong></h1>
                      </div>
                      <div className="form-group">
                        <label>Description:</label>{item.description}
                      </div>
                      <div className="form-group">
                      <h3 style={{color: "#ffffff"}}><label>Prix:</label>{item.price}</h3>  
                      </div>
                      <div className="form-group">
                        <label>Catégorie:</label>{item.category}
                      </div>
                      <div className="form-group">
                        <label>Rating:</label> 7/10
                      </div>
                    </form>
                    <div className="form-actions">
                    <Link to='/menu/Menu'>
              <Button className="btn btn btn-warning btn-lg btn-block" style={{border:'1px solid #ffffff',marginBottom:"15px"} }>
          <span class="fa fa-sign-in"></span> return to menu
              </Button>
                 </Link>
                    </div>
         </div>




                    <div className="col-sm-6" >
                    <div class="thumbnail" style={{color: "#ffc947", textAlign:"center", backgroundColor:"#241b18"}} >
                        
                        <img style={{backgroundColor: "#ffc947",width:"100%",border:"3px solid  #ffff"}} src={`/${item.image}`} alt="..."></img>
                  
                    
                    <div class="price"></div>
                      <div class="caption">
                        <h4>Say something good</h4>
                        
                        <Link to={`/detail/${item.id}`}>
              <Button className="btn btn btn-danger btn-lg btn-block " style={{border:'1px solid #ffffff'} }>
          <span class="fa fa-sign-in"></span> Add 
              </Button>
                 </Link>
                      </div>
              

                    </div>
                   

                    </div>
          </div>





                </div>
        
        
      
        )
        }
    
  




export default Detail;