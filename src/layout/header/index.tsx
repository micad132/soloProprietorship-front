import styles from '../Layout.module.scss'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import NavigationComponent from '../nav/Navigation.component'
import { useAppSelector } from '../../utils/hooks'
import { getUserDetails } from '../../store/reducers/utilsReducer'
import LoggedUserData from './components/LoggedUserData'
import React, { type ReactElement } from 'react'

const Header = (): ReactElement => {
  const navigate = useNavigate()
  const isLogged = useAppSelector(getUserDetails)

  const properButton = isLogged
    ? (
            <form method='post' action='http://localhost:8080/logout'>
                <Button
                    variant="contained"
                    type='submit'
                    style={{ width: '10rem' }}
                >
                    Wyloguj się
                </Button>
            </form>
      )
    : (
        <Button
            variant="contained"
            onClick={() => { navigate('/login', { replace: true }) }}
        >
            Zaloguj się
        </Button>
      )

  return (
        <header className={styles.header} data-testid='headerWrapper'>
            <h1 data-testid='header' className={styles.title}>Witaj na portalu wlasnej firmy!</h1>
            <LoggedUserData />
            {properButton}
            <NavigationComponent />
        </header>
  )
}

export default Header
