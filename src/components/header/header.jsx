import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="container">
          <div className='header-wrapper'>
            <h1 className='heading'>ATAEV</h1>
            <h2  className='heading'>BAHODIR BUILD</h2>
            <p>Hamma narsada a'lo</p>
            <div className="header-btns">
                <button className='header-btn'>Bizning loyihalarimiz</button>
                <button className='header-btn'>Bog'lanish</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header