import { Component} from "react"
import "../assets/stylesheets/FormSmallBtn.css"
// import {NavBarLevel1} from './NavBarLevel1'
class FormSmallBtn extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div id="short-btn">
              <a href="#" id="login-btn" className="btn">Login</a>
              <a href="#" id="register-btn" className="btn">Signup</a>
            </div>
        )
    }
}

export {
    FormSmallBtn,
}