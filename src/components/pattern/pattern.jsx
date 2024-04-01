import './pattern.css'
const Pattern = () => {
  return (
    <div className='pattern'>
        {/* <div className="container"> */}
                    <h1 className='pattern-title'>Hamkorlar bilan fikr almashish</h1>
        <div className="patter-wrapper">
                  <div className='pattern-top'>
                    <img className='pattern-img' src="/partner1.jpg" alt="patter" />
                    <img className='pattern-img' src="/bg2.png" alt="patter" />
                    <img className='pattern-img' src="/partner3.jpg" alt="patter" />
                    <img className='pattern-img' src="/partner4.jpg" alt="patter" />
                  </div>
                  <div className='patter-bottom'>
                  <img className='pattern-img' src="/partner5.jpg" alt="patter" />
                  <img className='pattern-img' src="/partner6.jpg" alt="patter" />
                  <img className='pattern-img' src="/partner7.jpg" alt="patter" />
                  <img className='pattern-img' src="/partner8.jpg" alt="patter" />
                  </div>
        </div>
        {/* </div> */}

    </div>
  )
}

export default Pattern