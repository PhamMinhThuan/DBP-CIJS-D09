import { Component} from "react"
import "../assets/StyleSheets/NavBar.css"
import {NavBarLevel1} from './NavBarLevel1'
// import {NavBar} from './components/NavBar'
// import React from "react";
// React.Component;
class NavBar extends Component{
    constructor(props){
        super(props)
    //mot các hay ho khác 
    }
    render(){
        return (
            <ul id="nav-bar">
                <NavBarLevel1/>
                <NavBarLevel1/>
                <NavBarLevel1/>
            </ul>
        )
    }
}

export {
    NavBar,
}