import React, { type ReactElement, useState } from 'react'
import styles from './../Authorization.module.scss'
import { Button, TextField } from '@mui/material'
import { useAppSelector } from '../../../utils/hooks'
import { getQRURL, getUserData } from '../../../store/reducers/utilsReducer'
import { AuthService } from '../../../services/api/AuthService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CodeComponent = (): ReactElement => {
  const [code, setCode] = useState<string>('')
  const qrCode = useAppSelector(getQRURL)
  const userData = useAppSelector(getUserData)
  const navigate = useNavigate()

  const onClick = async (): Promise<any> => {
    const data = { ...userData, code }
    try {
      await AuthService.loginUser(data)
      toast.success('Pomyslnie zalogowano!')
      navigate('/', { replace: true })
    } catch (e: any) {
      toast.error(e.response.data.message)
    }
  }

  return (
        <div className={styles.codeWrapper} data-testid='codeWrapper'>
                <h4 data-testid='codeText'>Wprowadź kod 2FA aby się zalogować!</h4>
                <TextField
                    value={code}
                    onChange={({ target: { value } }) => { setCode(value) }}
                    label='QR CODE'
                />
                <img src={qrCode} alt='qr_code' />
                <Button
                     onClick={() => { void onClick() }}
                     variant='contained'
                >
                    Zaloguj sie
                </Button>
        </div>
  )
}

export default CodeComponent
