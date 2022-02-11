import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "../components/Cards.module.css";
import icon from "../icon/close.png"
function Moodal({option1,inputOne,option2,setBalance1,setBalance2,Balance1,Balance2}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ConfirmHandler = ()=>{
      if(option1 === "ETH"){
        setBalance2(Balance2 + (+inputOne * 10))
        setBalance1(Balance1 - (+inputOne))
        handleClose()

      }else{
        setBalance1(Balance1 + (+inputOne / 10))
        setBalance2(Balance2 - (+inputOne))
        handleClose()
      }
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 500,
        borderRadius:"25px",
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
      };
    return (
        <div className={styles.ModalContainer}>
          <button onClick={handleOpen} className={styles.buttonConnect}>Connect Wallet</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className={styles.headCard}>
          <span>Confirm Swap</span>
        <a href='#/' onClick={handleClose}>
        <img className={styles.icon} src={icon} alt='iconHeaderCard'/>
        </a>
      </div>
          <div className={styles.containerForm}>
             <div className={styles.seconeInModal}>
               <p style={{margin:"0.6rem",fontSize:"1.5rem"}} >{inputOne}</p>
               <p style={{margin:"0.6rem",fontSize:"1.5rem"}}>{option1}</p>
             </div>
        </div>
        <div className={styles.arrow}>  
         <button className={styles.arrowButton}>&darr;</button>
          </div>
          <div className={styles.containerForm}>
             <div className={styles.seconeInModal}>
              <p style={{margin:"0.6rem",fontSize:"1.5rem"}}>{`${option1 === "ETH" && option2 === "LINK" ? `${+inputOne * 10}`: `${+inputOne / 10}`}`}</p>
               <p style={{margin:"0.6rem",fontSize:"1.5rem"}}>{option2}</p>
             </div>
        </div>
        <div className={styles.disc}>
             <p>1 ETH = 10 LINK</p>
           </div>
           <div className={styles.containerButtonConfirm}>
           <button onClick={ConfirmHandler} className={styles.buttonConnect}>Confirm Swap</button>

           </div>
        </Box>
      </Modal>
    </div>
    )
}

export default Moodal
