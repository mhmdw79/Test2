import React, { useState } from 'react';
import styles from "./Cards.module.css"
import icon from "../icon/settings.png"
import Moodal from './Modal';


function Cards() {
  const[inputOne,setInputOne] = useState(0)
  const[option1,setOption1] = useState("ETH")
  const[option2,setOption2] = useState("LINK")
  const [Balance1 , setBalance1] = useState(15)
  const [Balance2 , setBalance2] = useState(100)


  const changeHandlerInputOne = (e)=>{
  
     setInputOne(e.target.value)
    
   
  }
 
  const changeHandlerSelect1 = e =>{
    setOption1(e.target.value)
  }
  const changeHandlerSelect2 = e =>{
    setOption2(e.target.value)
  }
  const submitHandler = (e)=>{
   e.preventDefault()
  }
return(
  <div className={styles.container}>
      <div className={styles.headCard}>
          <span>Swap</span>
        <a href='#/'>
        <img className={styles.icon} src={icon} alt='iconHeaderCard'/>
        </a>
      </div>
        <form onSubmit={submitHandler}>
        <div className={styles.containerForm}>
             <div className={styles.secone}>
               <input className={styles.inputSecOne} value={inputOne} onChange={changeHandlerInputOne} placeholder='0.0'/>
               <div className={styles.secOne2}>
               <select name="CRYPTO" value={option1} onChange={changeHandlerSelect1} className={styles.selectSecOne}>
                 <option value="LINK">LINK</option>
                 <option value="ETH">ETH</option>
               </select>
               <p>Balance: {`${option1 === "ETH" ? `${Balance1}` : `${Balance2}`}`}</p>
               </div>
             </div>
        </div>
        <div className={styles.arrow}>  
         <button className={styles.arrowButton}>&darr;</button>
          </div>
          <div className={styles.containerForm2}>
             <div className={styles.secone}>
               {option1 === option2 ? <input className={styles.inputSecOne}  value={0}   onChange={changeHandlerInputOne}  placeholder='0'/> :                <input className={styles.inputSecOne}  value={`${option1 === "ETH" && option2 === "LINK" ? `${+inputOne * 10}`: `${+inputOne / 10}`}`}   onChange={changeHandlerInputOne}  placeholder='0'/>

}
               <div className={styles.secOne2}>
               <select value={option2} onChange={changeHandlerSelect2}  name="CRYPTO" className={styles.selectSecOne}>
                 <option value="LINK">LINK</option>
                 <option value="ETH">ETH</option>
               </select>
               <p>Balance: {`${option1 === "ETH" ? `${Balance1}` : `${Balance2}`}`}</p>
               </div>
             </div>
        </div>
           <div className={styles.disc}>
             <p>1 ETH = 10 LINK</p>
           </div>     
             <Moodal  inputOne={inputOne} option1={option1} option2={option2} setBalance1={setBalance1} setBalance2={setBalance2} Balance1={Balance1} Balance2={Balance2} />
        </form>
  
       
  </div>
)
}

export default Cards
