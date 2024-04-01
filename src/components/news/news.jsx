import './news.css'
const News = () => {
  return (
    <div className='news' id='news'>
        <div className="container">
        <h1 className='news-title'>Barcha Yangiliklar</h1>
            <div   className="news-wrapper">
                <div  data-aos="fade-right" className="news-card">
                    <img src="/new1.jpg" alt="news" />
                    <div className='news-info'>
                        <span></span>
                        <h2>Qurilish loyihasi menejeri kim?</h2>
                        <p>Discover Invest kompaniyasida qurilish loyihasi bo'yicha bir nechta menejerlar mavjud. Bu mutaxassis o'ziga ishonib topshirilgan qurilish ob'ektini muvaffaqiyatli amalga oshirish uchun mas'uldir. U rejalashtirish bosqichidan va loyiha hujjatlarini tasdiqlashdan tortib, ishga tushirishgacha bo'lgan butun jarayonni boshqaradi. binoning, va ba'zan ham loyihadan keyingi yordamni amalga oshiradi. Eng so'nggi</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="news-card">
                    <img src="/new2.jpg" alt="img" />
                    <div className='news-info'>
                             <span className='news-btn'></span>
                        <h2>Barchani kelayotgan 2024 yil bilan tabriklayman!</h2>
                        <p>Zallarning murakkab ichki dizayni kvartiraga kirishdan oldin ham qulaylik muhitini yaratadi va qulay navigatsiya tizimi sizga kerakli qavatga osongina chiqishga yoki hududga chiqishga yordam beradi.</p>
                    </div>
                </div>
                <div  data-aos="fade-right"  className="news-card">
                    <img src="/new3.jpg" alt="new" />
                    <div className='news-info'>
                        <span></span>
                        <h2>
Manzil</h2>
                        <p>Transport infratuzilmasi shaharning istalgan nuqtasiga osongina ko'chib o'tishga imkon beradi: siz faqat kerakli va kerakli yo'nalishni tanlashingiz kerak.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="news-card">
                    <img src="/new4.jpg" alt="img" />
                    <div className='news-info'>
                             <span className='news-btn'></span>
                        <h2>Biz Tanishtirishda  davom etamiz.</h2>
                        <p>Biz sizlarni 'ATAEV BAHODIR BUILD' kompaniyasining ko'p funksiyali ob'ektlari bilan tanishtirishda davom etamiz. Ulardan biri Toshkent shahrining Yangixoyat tumanida barpo etilgan 'Yangi Choshtepa turar-joy majmuasidir. </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default News