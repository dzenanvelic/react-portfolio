import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import{
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data'
function Portfolio() {
const [selected,setSelected]=useState('featured')
const [data,setData]=useState([])
    const list=[
        {id:'featured',
        title:'Featured'
        },
        {id:'mobile',
        title:'Mobile App'
        },
        {id:'web',
        title:'Web Design'
        },
        {id:'webapp',
        title:'Web App'
        },
        {id:'branding',
        title:'Branding'
        },
    ]
    
    useEffect(()=>{
switch(selected){
    case"featured":
   setData(featuredPortfolio)
   break;
    case"mobile":
   setData(mobilePortfolio)
   break;
    case"web":
   setData(designPortfolio)
   break;
    case"webapp":
   setData(webPortfolio)
   break;
    case"branding":
   setData(contentPortfolio)
   break;
   default:
       setData(featuredPortfolio)
}
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
          <h1>Portfolio</h1>
          <ul>
             {list.map((item)=>{
                 return <PortfolioList key={item.id} title={item.title} id={item.id} active={selected === item.id}setSelected={setSelected}/>
             })}
          </ul>
        
          <div className="container">
                {data.map((data)=>{
                return<div className="item">
                  <img src={data.img} alt="fgdg" />
                  <h3>{data.title}</h3>
              </div>})}
              
             
          </div>
        </div>
    )
}

export default Portfolio
