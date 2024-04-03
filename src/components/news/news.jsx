import {useTranslation} from 'react-i18next'
import './news.css'
const News = () => {
    const {t} = useTranslation()
  return (
    <div className='news' id='news'>
        <div className="container">
        <h1 className='news-titles'>{t("newsProject")}</h1>
            <div   className="news-wrapper">
                <div  data-aos="fade-right" className="news-card">
                    <img  src="/new1.jpg" alt="news" />
                    <div className='news-info'>
                        <span></span>
                        <h2 className="news-title">{t("newTitle1")}</h2>
                        <p className="news-subtitle">{t("newSubtitle1")}</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="news-card">
                    <img  src="/new2.jpg" alt="img" />
                    <div className='news-info'>
                             <span className='news-btn'></span>
                        <h2 className="news-title">{t("newTitle2")}</h2>
                        <p className="news-subtitle">{t("newSubtitle2")}</p>
                    </div>
                </div>
                <div  data-aos="fade-right"  className="news-card">
                    <img  src="/new3.jpg" alt="new" />
                    <div className='news-info'>
                        <span></span>
                        <h2 className="news-title">
                        {t("newTitle3")}</h2>
                        <p className="news-subtitle">{t("newSubtitle3")}</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="news-card">
                    <img  src="/new4.jpg" alt="img" />
                    <div className='news-info'>
                             <span className='news-btn'></span>
                        <h2 className="news-title">{t("newTitle4")}</h2>
                        <p className="news-subtitle">{t("newSubtitle4")}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default News