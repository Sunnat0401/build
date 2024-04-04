import {useTranslation}  from "react-i18next"
import './footer.css'
const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="card">
                    <a href="#" className='footer-imgs'>
                    <img className='footer-img' src="/ataev2.png" alt="ataev" />
                    </a>
                    <h2 className='footer-title'>{t("footerInfo")}</h2>
                   <ul className='card-lists'>
                    <li className='card-list'>  <i className="fa-brands fa-instagram"></i></li>
                         <li className='card-list'><i className="fa-brands fa-facebook"></i>
</li>                 
                   </ul>
                </div>
               <div className="card">
               <ul className="footer-lists">
                    <li className="footer-list"><a className='footer-links' href="#">{t("footerList1")}</a></li>
                    <li className="footer-list"><a className='footer-link' href="#">{t("footerItem1")} </a></li>
                    <li className="footer-list"><a className='footer-link' href="#">{t("footerItem2")}</a></li>
                    <li className="footer-list"><a className='footer-link' href="#">{t("footerItem3")}</a></li>
                    <li className="footer-list"><a className='footer-link' href="#">{t("footerItem4")}</a></li>
                </ul>
               </div>
               <div className="card">
               <ul className="footer-items">
                    <li className="footer-item"><a  className='footer-links' href="#">{t("footerList2")}</a></li>
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