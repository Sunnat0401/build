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
               <h1>
               <CountUp start={0} end={120} duration={2} delay={2}/>  +
               </h1>
    </ScrollTrigger>
        <p>Xodimlar soni</p>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
               <h1>
               <CountUp start={0} end={120} duration={2} delay={2}/>  +
               </h1>
    </ScrollTrigger>
    <p>Ob'ektlar</p>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
               <h1>
               <CountUp start={0} end={43} duration={2} delay={2}/>  +
               </h1>
    </ScrollTrigger>
    <p>Maxsus jihozlar</p>
      </div>
      <div className='counter-info'>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
               <h1>
               <CountUp start={0} end={250} duration={2} delay={2}/>  +
               </h1>
    </ScrollTrigger>
    <p>Bozorda 14 yil</p>
      </div>
    </div>
  )
}

export default CounterUpPage