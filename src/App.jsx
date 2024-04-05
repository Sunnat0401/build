import About from './components/about/about'
import Connect from './components/connect/connect'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import News from './components/news/news'
import OurCompany from './components/our-company/our company'
import Pattern from './components/pattern/pattern'
import Projects from './components/projects/projects'
import Services from './components/services/services'
import translationsEn from './locale/translationsEn';
import translationsUz from './locale/translationsUz';
import './App.css'
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

const  changeLanguages = (value) =>{
  i18n.changeLanguage(value)
}
  return (
    <div>
      <Navbar changeLanguages={changeLanguages}/>
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