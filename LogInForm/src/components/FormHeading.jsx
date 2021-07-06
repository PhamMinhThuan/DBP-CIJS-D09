import { Component} from "react"
import "../assets/stylesheets/FormHeading.css"
// import {NavBarLevel1} from './NavBarLevel1'
class FormHeading extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <h2 className="heading">Login Form</h2>
        )
    }
}

export {
    FormHeading,
}