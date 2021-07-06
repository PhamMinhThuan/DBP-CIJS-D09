import { Component} from "react"
import "../assets/stylesheets/FormQuestionRegister.css"
class FormQuestionRegister extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{display: "block"}} className="question">
            Not a member?
            <a className="pink-color" href="#"> Signup now</a>
          </div>
        )
    }
}

export {
    FormQuestionRegister,
}