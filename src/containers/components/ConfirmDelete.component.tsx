import { Button } from '@mui/material'
import React, { type ReactElement } from 'react'

interface Props {
  onClick: () => void
  text: string
}

const ConfirmDeleteComponent = ({ onClick, text }: Props): ReactElement => {
  return (
        <div>
            <p>Czy chcesz usunąć {text}</p>
            <Button
                variant='contained'
                onClick={onClick}
            >
                Usuń
            </Button>
        </div>
  )
}

export default ConfirmDeleteComponent
