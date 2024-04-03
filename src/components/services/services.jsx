import {useTranslation} from 'react-i18next'
import './services.css'
const Services = () => {
  const {t} = useTranslation()
  return (
    <div className='services' id='services'>
        <div className="container">
            <h1 className='services-heading'>{t("ourServices")}</h1>
            <div className="services-list">
              <div className="services-left">
                  <div data-aos="fade-right" className="services-card">
                    <p className="service-text">{t("serviceText1")}</p>
                    <img src="/gold.png" alt="gold" />
                  </div>
                  <div  data-aos="fade-left" className="services-card ">
                    <p className="service-text">{t("serviceText2")}</p>
                    <img src="/notebook.png" alt="gold" />
                  </div> 
              </div>
              <div className="services-right">
                    <div  data-aos="fade-up" className="services-card">
                    <p className="service-text">{t("serviceText3")}</p>
                    <img src="/settings.png" alt="gold" />
                  </div>             
                   <div  data-aos="fade-up" className="services-card">
                    <p className="service-text">{t("serviceText4")}</p>
                    <img src="/car.png" alt="car" />
                  </div>

              </div>

            </div>
        </div>
    </div>
  )
}

export default Services