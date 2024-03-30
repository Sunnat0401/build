import './home.css'
const Home = () => {
  return (
    <div className="home">
            <h1>Sizning orzuyingizdagi uy</h1>
              <div className="home-top">
                <img className='home-img' src="/public/img1.jpg" alt="image" />
                <img className='home-img' src="/public/img2.jpg" alt="image" />
                <img className='home-img' src="/public/img3.jpg" alt="image" />
              </div>
              <div className="home-bottom">
                <img className='home-img' src="/public/img4.jpg" alt="image" />
                <img className='home-img' src="/public/img5.jpg" alt="image" />
                <img className='home-img' src="/public/img6.jpg" alt="image" />

              </div>
        </div>
  )
}

export default Home