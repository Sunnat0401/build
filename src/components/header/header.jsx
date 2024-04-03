import {useTranslation} from 'react-i18next'
import './header.css'
const Header = () => {
  const {t} = useTranslation()
  return (
    <div className='header'>
        <div className="container">
          <div className='header-wrapper'>
            <h1 className='heading'>ATAEV</h1>
            <h2  className='heading'>BAHODIR BUILD</h2>
            <p className='header-text'>{t("excellent")}</p>
            <div className="header-btns">
                <button className='header-btn'><a href="#advantages">{t("ourAdvantages")}</a></button>
                <button className='header-btn'><a href="#connect">{t("contact")}</a></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header