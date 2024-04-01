import { useState,  } from 'react'
import Header from '../header/header'
import {useTranslation} from 'react-i18next'
import './navbar.css'

const Navbar = ({ changeLang }) => {

 const changelangHandler = (e) =>{
    changeLang(e.target.value)
 }
  const {t} = useTranslation()
    const [color, setColor] = useState(false)
const changeColor = ()=>{
    if(window.scrollY >= 90){
        setColor(true)
    }else{
        setColor(false)
    }
}
 window.addEventListener('scroll' , changeColor)
  return (
    <div className="navbar-wrapper">
                <div className= "navbar">
       <div className={color ? "wrapper active" : "wrapper"}>
                
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#info" className="navbar-link">{t("data")}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about" className="navbar-link">{t("aboutUs")}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#services" className="navbar-link">{t("services")}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">
                            <img src="/public/ataev.png" alt="ataev" />
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="#advantages" className="navbar-link">{t("ourAdvantages")}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#news" className="navbar-link">{t("news")}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#connect" className="navbar-link">{t("contact")}</a>
                    </li>     
                    <select className='navbar-select' onChange={changelangHandler}>
                                <option value="uz">Uz</option>
                                <option value="en">En</option>
                            </select>
                </ul>
    
                    <div className="hamburger">
                    <img src="/public/icon.svg" alt="hamburger " />
                    </div>
               
          
                </div>
        <div className="container">
        <Header/>
            
              </div>
    </div>
    </div>

    
  )
}

export default Navbar