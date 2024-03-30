import './pattern.css'
const Pattern = () => {
  return (
    <div className='pattern'>
        {/* <div className="container"> */}
                    <h1 className='pattern-title'>Hamkorlar bilan fikr almashish</h1>
        <div className="patter-wrapper">
                  <div className='pattern-top'>
                    <img className='pattern-img' src="/public/partner1.jpg" alt="patter" />
                    <img className='pattern-img' src="/public/bg2.png" alt="patter" />
                    <img className='pattern-img' src="/public/partner3.jpg" alt="patter" />
                    <img className='pattern-img' src="/public/partner4.jpg" alt="patter" />
                  </div>
                  <div className='patter-bottom'>
                  <img className='pattern-img' src="/public/partner5.jpg" alt="patter" />
                  <img className='pattern-img' src="/public/partner6.jpg" alt="patter" />
                  <img className='pattern-img' src="/public/partner7.jpg" alt="patter" />
                  <img className='pattern-img' src="/public/partner8.jpg" alt="patter" />
                  </div>
        </div>
        {/* </div> */}

    </div>
  )
}

export default Pattern