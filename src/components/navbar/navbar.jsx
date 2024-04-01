import { useState } from 'react'
import Header from '../header/header'
import './navbar.css'
const Navbar = () => {
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
                        <a href="#info" className="navbar-link">Malumotlar</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about" className="navbar-link">Biz haqimizda</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#services" className="navbar-link">Xizmatlar</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">
                            <img src="/public/ataev.png" alt="ataev" />
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="#advantages" className="navbar-link">Afzalliklarimiz</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#news" className="navbar-link">Yangiliklar</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#connect" className="navbar-link">Aloqa</a>
                    </li>     
                    <select name="" id="" className='navbar-select'>
                                <option value="">Uz</option>
                                <option value="">En</option>
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