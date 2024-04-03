import React from 'react'
import styles from './Errors.module.css'

function RouteNotFound() {
  return (
    <div className='parentContainer'>
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>
        Page not found. The page you are looking for does not exist or has been
        moved.
      </p>
      <a href='/' className={styles.homeLink}>
        Go back to Home
      </a>
    </div>
    </div>
  )
}

export default RouteNotFound
