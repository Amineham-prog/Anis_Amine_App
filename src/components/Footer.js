import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
   return(
    <div className="footer">
    <div className="container">
        <div className="row justify-content-center">             
            <div className="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled ">
                <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/home'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-7 col-sm-5">
                <h5>Our Address</h5>
                <address>
                 164 Rue<br />
                 Des rabats<br />
                  92160 Antony<br /><br />
                  <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br/>
                  <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                     confusion@food.net</a>
                </address>

                </div>
                <div className="col-12 col-sm-4 align-self-center" style={{margin: "10px auto"}}>
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" style={{color: "white"}} href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>HAM Jungle Burger </p>
                </div>
            </div>
        </div>
    </div>
   );


}


export default Footer;