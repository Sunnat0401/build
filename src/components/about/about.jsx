import {useTranslation} from 'react-i18next'
import './about.css'
const About = () => {
   const {t} = useTranslation()
  return (
    <div className='about' id='info'>
        <div className="container">
            <h2  data-aos="fade-up" className='about-title'>ATAEV BAHODIR BUILD</h2>
            <p  data-aos="fade-up" className='about-subtitle'>{t("aboutInfo")}</p>
               <div  data-aos="flip-left" className='about-link'>
                <a className='about-sublink' href="#connect">{t("aboutText")}</a>
               </div>
        </div>
    </div>
  )
}

export default About