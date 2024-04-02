import './home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
              <h1 className='home-title'>Sizning orzuyingizdagi uy</h1>
              <div className="home-top">
                <img className='home-img' src="/img1.jpg" alt="image" />
                <img className='home-img' src="/img2.jpg" alt="image" />
                <img className='home-img' src="/img3.jpg" alt="image" />
              </div>
              <div className="home-bottom">
                <img className='home-img' src="/img4.jpg" alt="image" />
                <img className='home-img' src="/img5.jpg" alt="image" />
                <img className='home-img' src="/img6.jpg" alt="image" />
              </div>
              </div>
        </div>
  )
}

export default Home