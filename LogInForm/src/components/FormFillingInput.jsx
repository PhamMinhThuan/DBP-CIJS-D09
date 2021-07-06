import { Component} from "react"
import "../assets/stylesheets/FormFillingInput.css"
// import {NavBarLevel1} from './NavBarLevel1'
class FormFillingInput extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="form-filling">
                <input id="mail" className="form-style" name="mail" type="mail" placeholder="Email Address" />
                <input id="password" className="form-style" name="password" type="password" placeholder="Password" />
            </div>

        )
    }
}

export {
    FormFillingInput,
}