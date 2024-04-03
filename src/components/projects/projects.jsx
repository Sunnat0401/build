import {useTranslation} from 'react-i18next'
import './projects.css'
const Projects = () => {
     const {t} = useTranslation()
  return (
    <div className="projects" id='about'>
        <div className="container">
            <h1 className='projects-title'>{t("ourProjects")}</h1>
            <div className="project-cards">
                <div className="project-card">
                    <div className="card-right">
                         <div className="card-info">
                            <h2>Magic City</h2>
                            <br />
                            <p>{t("projectText1")}</p>
                         </div>
                    </div>
                    <div className="card-left">
                          <div className="card-info">
                              <h2>Gardens Residence</h2>
                              <br />
                               <p>{t("projectText2")}</p>
                          </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="card-right img3">
                         <div className="card-info">
                            <h2>Fonon</h2>
                            <br />
                            <p>{t("projectText3")}</p>
                         </div>
                    </div>
                    <div className="card-left img4">
                          <div className="card-info">
                              <h2>Invento</h2>
                              <br />
                               <p>{t("projectText4")}</p>
                          </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="card-right img5">
                         <div className="card-info">
                            <h2>Presidential School</h2>
                            <br />
                            <p>{t("projectText5")}</p>
                         </div>
                    </div>
                    <div className="card-left img6">
                          <div className="card-info">
                              <h2>Boulevard</h2>
                              <br />
                               <p>{t("projectText6")}</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects