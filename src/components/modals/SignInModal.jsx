import React from 'react'

//module css
import styles from '../modals/modals.module.css'
const SignInModal = ({state}) => {
  
  
  return (
   <>
    {state === true ? <div  className={styles.signInmodal}>

    </div>
  :
null
}
   </>
  )
}

export default SignInModal