import './projects.css'
const Projects = () => {
  return (
    <div className="projects">
        <div className="container">
            <h1 className='projects-title'>Bizning loyihalarimiz</h1>
            <div className="project-cards">
                <div className="project-card">
                    <div className="card-right">
                         <div className="card-info">
                            <h2>Magic City</h2>
                            <br />
                            <p>Bu keng ko'lamli ijtimoiy ahamiyatga ega loyiha. Toshkentdagi madaniy-ko'ngilochar klaster yangi diqqatga sazovor joylardan biridir.</p>
                         </div>
                    </div>
                    <div className="card-left">
                          <div className="card-info">
                              <h2>Gardens Residence</h2>
                              <br />
                               <p>O'zbekiston aholisiga qulaylik yaratish maqsadida yaratilgan ko'p funksiyali turar-joy majmuasi</p>
                          </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="card-right img3">
                         <div className="card-info">
                            <h2>Fonon</h2>
                            <br />
                            <p>Poytaxt markazidagi muhtasham turar-joy massivi..</p>
                         </div>
                    </div>
                    <div className="card-left img4">
                          <div className="card-info">
                              <h2>Invento</h2>
                              <br />
                               <p>O'Fonon - O'zbekistonda 2020 yilda italyan zavodlari negizida qurilgan zargarlik buyumlari ishlab chiqarish zavodi. Fonon - Markaziy Osiyoda Yevropa va Sharq uslubida qimmatbaho metallardan zargarlik buyumlari ishlab chiqaradigan yagona yirik korxona</p>
                          </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="card-right img5">
                         <div className="card-info">
                            <h2>Presidential School</h2>
                            <br />
                            <p>Tashkent City xalqaro biznes markazida joylashgan xalqaro bolalar bog'chasi va maktabi..</p>
                         </div>
                    </div>
                    <div className="card-left img6">
                          <div className="card-info">
                              <h2>Boulevard</h2>
                              <br />
                               <p>Bu xalqaro darajada bilim beradigan ta'lim muassasasi</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects