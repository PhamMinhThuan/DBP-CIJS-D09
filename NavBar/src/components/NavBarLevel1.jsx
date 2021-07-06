import { Component} from "react"
import {NavBarLevel2} from './NavBarLevel2'
import "../assets/StyleSheets/NavBarLevel1.css"

class NavBarLevel1 extends Component{
    constructor(props){
        super(props)
        // this.state = {group: this.group};
    }
    
    render(){
        return (
            <li className="nav-bar-item">
{/* {this.state.group} */}
              <a className="a-level-1" href="">Danh sách nhóm A</a>
              <ul className="nav-bar-level-1">
                <NavBarLevel2/>
                <NavBarLevel2/>
                <NavBarLevel2/>
              </ul>
            </li>
          // }
        )
}
}

export {
  NavBarLevel1,
}