import { Component} from "react"
import "../assets/StyleSheets/NavBarLevel2.css"

class NavBarLevel2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li className="nav-bar-item-level-1">
              <a className="a-level-2" href="">contentA</a>
              <ul className="nav-bar-level-2">
                  <li className="nav-bar-item-level-2"><a href="">contentA1</a></li>
                  <li className="nav-bar-item-level-2"><a href="">contentA2</a></li>
                  <li className="nav-bar-item-level-2"><a href="">contentA3</a></li>
              </ul>
            </li>
        )
    }
}

export {
    NavBarLevel2,
}