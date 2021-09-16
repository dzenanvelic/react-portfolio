import React from 'react'
import './topbar.scss'
import{Person,Mail} from '@material-ui/icons'
function Topbar({setMenuOpen,menuOpen}) {
    return (
        <div className={menuOpen ? "topbar " :"topbar active"} >
         <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Dzenan Velic</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>00387 061/047-998</span>
                     </div>
                <div className="itemContainer">
                   <Mail className="icon"/>
<span>dzenanvelic99@gmail.com</span>
                     </div>

               
                </div> 
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                 <span className="line1"></span>
                 <span className="line2"></span>
                 <span className="line3"></span>
                </div>
                </div> 
         </div>
        </div>
    )
}

export default Topbar
