import {useTranslation} from 'react-i18next'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import './counter-up-page.css'
import ScrollTrigger from 'react-scroll-trigger'
const CounterUpPage = () => {
  const {t} = useTranslation()
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div className='counter-card'>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
                        { 
                          counterOn &&
                        <span>
               <h1>
                                         <CountUp start={0} end={120} duration={2} delay={0.2}/>  +
               </h1>
        <p className='counter-text'>{t("companyText1")}</p>
        </span>
                        }
    </ScrollTrigger>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
                { counterOn &&
            <span>
                   <h1>
                  <CountUp start={0} end={83} duration={2} delay={0.2}/>  +
               </h1>
                      <p className='counter-text'>{t("companyText2")}</p>
                </span>
                }
    </ScrollTrigger>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
                     {
               counterOn && 
                      <span>
               <h1>
               <CountUp start={0} end={43} duration={2} delay={0.2}/>  +
               </h1>
               <p className='counter-text' >{t("companyText3")}</p>
               </span>
                     }
    </ScrollTrigger>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
                {
               counterOn && 
                  <span>
                    <h1>
               <CountUp start={0} end={250} duration={2} delay={0.2}/>  +
               </h1>
               <p className='counter-text'>{t("companyText4")}</p>
               </span>
                }
    </ScrollTrigger>
      </div>
    </div>
  )
}

export default CounterUpPage