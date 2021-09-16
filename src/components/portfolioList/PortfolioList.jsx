import { SelectAllRounded } from '@material-ui/icons'
import React from 'react'
import './portfolioList.scss'

function PortfolioList({title,setSelected,active,id}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
