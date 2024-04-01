import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="wrapper">
                <div className="card">
                    <a href="#" className='footer-imgs'>
                    <img className='footer-img' src="/ataev2.png" alt="ataev" />
                    </a>
                    <h2 className='footer-title'>Ijtimoiy tarmoqlarimizga obuna bo'ling</h2>
                   <ul className='card-lists'>
                    <li className='card-list'>  <i className="fa-brands fa-instagram"></i></li>
                         <li className='card-list'><i className="fa-brands fa-facebook"></i>
</li>                 
                   </ul>
                </div>
               <div className="card">
               <ul className="footer-lists">
                    <li className="footer-list"><a className='footer-links' href="#">Kompaniyamiz</a></li>
                    <li className="footer-list"><a className='footer-link' href="#">Korxonalar </a></li>
                    <li className="footer-list"><a className='footer-link' href="#">Biz haqimizda</a></li>
                    <li className="footer-list"><a className='footer-link' href="#">Yangiliklar</a></li>
                    <li className="footer-list"><a className='footer-link' href="#">Bizning loyihalarimiz</a></li>
                </ul>
               </div>
               <div className="card">
               <ul className="footer-items">
                    <li className="footer-item"><a  className='footer-links' href="#">Aloqa</a></li>
                    <li className="footer-item"><a   className='footer-link' href="#">+998 90 124 94 74 </a></li>
                    <li className="footer-item"><a  className='footer-link' href="#">+ 998 93 666 99 74</a></li>
                </ul>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer