import './connect.css'
const Connect = () => {
  return (
    <div className='connect' id='connect'>
        <div className="container">
            <div className="connect-bg">
                <div className="connect-wrapper">
                        <h1 className='connect-title'>Savol , taklif va murojat bormi</h1>
                        <form data-aos="fade-up" className='connect-form' action="">
                            <input type="text" placeholder='Ismingiz' />
                            <input type="text"  placeholder='Telefon raqamingiz'/>
                            <textarea name="" id="" cols="10" rows="10" placeholder='Siznig xabaringiz'></textarea>
                            <button>Yuborish</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect