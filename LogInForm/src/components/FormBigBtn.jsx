import { Component} from "react"
import "../assets/stylesheets/FormBigBtn.css"
// import {NavBarLevel1} from './NavBarLevel1'
class FormBigBtn extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div id="big-btn" className="btn">Login</div>
        )
    }
}

export {
    FormBigBtn,
}