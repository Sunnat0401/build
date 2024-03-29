import Header from '../header/header'
import Navbar  from '../navbar/navbar'
import './visible.css'
const Visible = () => {
  return (
    <div className='visible'>
          <div className="container">
                <Navbar/>
                <Header/>
          </div>
    </div>
  )
}

export default Visible