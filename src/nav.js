import React, { Component } from 'react';
import "./App.css";
class Nav extends Component{
    constructor(){
        super()
            this.state={
                name:"Pablo Picasso",
                para:"The man Who invented Cubism",
              }
        }
    
    
    render(){
        return(
            <div className='navbar' >
                <h1>{this.state.name}</h1>
                <p>{this.state.para}</p>
            </div>
        )
    }
}

export default Nav