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
import './app.css'
const App = () => {
  return (
    <div>
      <Navbar/>
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