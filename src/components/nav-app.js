import { Fragment } from "react";
import "./navstyles.css";
import React, { Component } from "react"
import { Link, NavLink} from "react-router-dom";




class NavApp extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }


    
    render(){
        
        const navLinkStyles = ({ isActive }) => {
            return {
                fontWeight: isActive ? 'bold' : 'normal'
            }
        }
        
        return <nav >
        
        <a href="https://github.com/EliasDjemaa">
            <div className="update-bar" >
                -> chemistree is project designed and developed 
                by Elias Djemaa 
            </div>
        </a>
        

        <div class="navbar">
            <div className="navbar-left">
                <span className="logo-inter">
                    <Link to='/'> chemistree </Link>
                </span>



            <div className="navbar-right">
                <span id="navbar-menu" className={this.state.clicked ? "#navbar-menu active" : "#navbar-menu"}>
                    <NavLink style={ navLinkStyles } to='/Solutions' id="menuSPC" > 
                        SOLUTIONS 
                    </NavLink>
                    <NavLink style={ navLinkStyles } to='/RequestAccess' id="menuSPC"> 
                        REQUEST ACCESS 
                    </NavLink>
                    <NavLink style={ navLinkStyles } to='/Login' id="log-in"> 
                        Login 
                    </NavLink>

                </span>
                <div id="mobile" onClick={this.handleClick}>
                    <i className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}> </i>
                </div>
            </div>
            
        </div>
        
        </div>

        
        </nav>

    

    
    ;
}
}

export default NavApp;