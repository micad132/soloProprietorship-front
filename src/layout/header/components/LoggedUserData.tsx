import { useAppSelector } from '../../../utils/hooks'
import { getUserDetails } from '../../../store/reducers/utilsReducer'
import styles from '../../Layout.module.scss'
import React, { type ReactElement } from 'react'

const LoggedUserData = (): ReactElement => {
  const userDetails = useAppSelector(getUserDetails)

  const properContent = userDetails
    ? (
            <div style={{ margin: '5px 0' }}>
                <h3 className={styles.loggedUserInfo}>Jesteś zalogowany jako {userDetails.firstName} {userDetails.email}</h3>
            </div>
      )
    : <h3 className={styles.loggedUserInfo}>Nie jesteś zalogowany!</h3>

  return (
        <div>
            {properContent}
        </div>
  )
}

export default LoggedUserData
