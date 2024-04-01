import './about.css'
const About = () => {
  return (
    <div className='about' id='info'>
        <div className="container">
            <h2  data-aos="fade-up" className='about-title'>ATAEV BAHODIR BUILD</h2>
            <p  data-aos="fade-up" className='about-subtitle'>Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar yaratamiz. Davlat miqyosidagi inshootlarni qurish orqali biz kelajakni quryapmiz. Biz atrof-muhit haqida qayg'uramiz: kompaniya binolar va infratuzilmani qurish va ulardan foydalanish bilan bog'liq ekologik jihatlar uchun to'liq javobgarlikni o'z zimmasiga oladi.</p>
               <div  data-aos="flip-left" className='about-link'>
                <a className='about-sublink' href="#">Batafsil bilish</a>
               </div>
        </div>
    </div>
  )
}

export default About