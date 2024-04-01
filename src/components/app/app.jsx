import About from '../about/about'
import Connect from '../connect/connect'
import Footer from '../footer/footer'
import Home from '../home/home'
import Navbar from '../navbar/navbar'
import News from '../news/news'
import OurCompany from '../our-company/our company'
import Pattern from '../pattern/pattern'
import Projects from '../projects/projects'
import Services from '../services/services'
import translationsEn from '../../locale/translationsEn';
import translationsUz from '../../locale/translationsUz';
import './app.css'
import i18n from 'i18next' ;
import {initReactI18next} from "react-i18next"
i18n.use(initReactI18next).init({
    resources:{
        en: { translation: translationsEn},
        uz: {translation: translationsUz},
    },
    lng : "uz" ,
    fallbackLng: "uz"
  })
const App = () => {
  
//    tillni oo'zgartirirsh 

const  changeLang = (value) =>{
  i18n.changeLanguage(value)
}
  return (
    <div>
      <Navbar changeLang={changeLang}/>
      <Services/>
      <OurCompany/>
      <Home/>
      <Projects/>
      <News/>
      <Pattern/>
      <About/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App