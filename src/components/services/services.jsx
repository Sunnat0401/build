import './services.css'
const Services = () => {
  return (
    <div className='services'>
        <div className="container">
            <h1 className='services-heading'>Bizning xizmatlar</h1>
            <div className="services-list">
              <div className="services-left">
                  <div className="services-card">
                    <p className="service">Siz kompaniyamiz mutaxassislaridan bepul ma'lumot olishingiz mumkin</p>
                    <img src="/gold.png" alt="gold" />
                  </div>
                  <div className="services-card">
                    <p className="service">Hujjatlarni rasmiylashtirish uchun</p>
                    <img src="/notebook.png" alt="gold" />
                  </div> 
              </div>
              <div className="services-right">
                    <div className="services-card">
                    <p className="service">Ta`mirlash tuzatish xizmat</p>
                    <img src="/settings.png" alt="gold" />
                  </div>             
                   <div className="services-card">
                    <p className="service">Professionallar jamoasi</p>
                    <img src="/car.png" alt="car" />
                  </div>

              </div>

            </div>
        </div>
    </div>
  )
}

export default Services