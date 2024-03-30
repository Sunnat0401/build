import React, { useState } from 'react'
import CountUp from 'react-countup'
import './counter-up-page.css'
import ScrollTrigger from 'react-scroll-trigger'
const CounterUpPage = () => {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div className='counter-card'>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
                        { 
                          counterOn &&
                        <span>
               <h1>
                                         <CountUp start={0} end={120} duration={2} delay={0.5}/>  +
               </h1>
        <p>Xodimlar soni</p>
        </span>
                        }
    </ScrollTrigger>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
                { counterOn &&
            <span>
                   <h1>
                  <CountUp start={0} end={120} duration={2} delay={0.5}/>  +
               </h1>
                      <p>Ob'ektlar</p>
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
               <CountUp start={0} end={43} duration={2} delay={0.5}/>  +
               </h1>
               <p>Maxsus jihozlar</p>
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
               <CountUp start={0} end={250} duration={2} delay={0.5}/>  +
               </h1>
               <p>Bozorda 14 yil</p>
               </span>
                }
    </ScrollTrigger>
      </div>
    </div>
  )
}

export default CounterUpPage