import { Component} from "react"
import "../assets/stylesheets/FormPasswordForgot.css"
// import {NavBarLevel1} from './NavBarLevel1'
class FormPasswordForgot extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div style={{display: "block"}} className="pink-color">Forgot password?</div>
        )
    }
}

export {
    FormPasswordForgot,
}