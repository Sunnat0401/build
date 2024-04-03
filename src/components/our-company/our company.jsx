import {useTranslation} from 'react-i18next'
import CounterUpPage from "../counter-up-page/counter-up-page"
import './our company.css'
const OurCompany = () => {
  const {t} = useTranslation()
  return (
    <div className="company" id="advantages">
        <div className="container">
            <h1 className="company-title">{t("ourCompany")}</h1>
              <CounterUpPage/>
        </div>
    </div>
  )
}

export default OurCompany