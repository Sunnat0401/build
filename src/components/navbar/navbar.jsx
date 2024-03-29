import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="container">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Malumotlar</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Biz haqimizda</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Korxonalar</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">
                        <img src="/public/ataev.png" alt="ataev" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Afzalliklarimiz</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Yangiliklar</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Aloqa</a>
                </li>     
                <select name="" id="" className='navbar-select'>
                            <option value="">Uz</option>
                            <option value="">En</option>
                        </select>
            </ul>

                {/* <img src="/hamburger.webp" alt="hamburger " /> */}
           
        </div>
    </div>
    
  )
}

export default Navbar