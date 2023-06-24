import { Button, FormControl, InputAdornment, InputLabel } from '@mui/material'
import React, { type ReactElement, useState } from 'react'
import styles from './Components.module.scss'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'

interface Props {
  id: number
  name: string
  onClick: () => void
  code: string
  setCode: any
  qrURL: string
  isUsing2FA: boolean

}

const DeletingComponent = ({ id, name, onClick, code, setCode, qrURL }: Props): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = (): void => { setShowPassword((show) => !show) }

  return (
        <div className={styles.deletingWrapper}>
            <p data-testid='deletingWrapperText'>Aby usunac<span style={{ fontWeight: 'bold' }}> {name} </span> wpisz odpowiedni kod </p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-required"
                    label="Podaj kod"
                    type={showPassword ? 'text' : 'password'}
                    value={code}
                    onChange={({ target: { value } }) => setCode(value)}
                    inputProps={{ maxLength: 6 }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            {qrURL && <img src={qrURL} />}
            <Button
                variant='contained'
                onClick={onClick}
            >
                Usuń
            </Button>
        </div>
  )
}

export default DeletingComponent
