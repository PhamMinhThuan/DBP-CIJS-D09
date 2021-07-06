import { Component} from "react"
import "../assets/stylesheets/LogInForm.css"
import {FormHeading} from './FormHeading'
import {FormSmallBtn} from './FormSmallBtn'
import {FormFillingInput} from './FormFillingInput'
import {FormPasswordForgot} from './FormPasswordForgot'
import {FormBigBtn} from './FormBigBtn'
import {FormQuestionRegister} from './FormQuestionRegister'

class LogInForm extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="login-form">
                <FormHeading/>
                <FormSmallBtn/>
                <FormFillingInput/>
                <FormPasswordForgot/>
                <FormBigBtn/>
                <FormQuestionRegister/>
          </div>
        )
    }
}

export {
    LogInForm,
}