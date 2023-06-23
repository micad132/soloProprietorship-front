import React, { type ReactElement } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NoAccount = (): ReactElement => {
  const navigate = useNavigate()
  return (
        <div>
            <p>Nie masz konta? Zarejestruj się</p>
            <Button
                onClick={() => { navigate('/register', { replace: true }) }}
                variant='contained'
            >Zarejestruj się</Button>
        </div>
  )
}

export default NoAccount
