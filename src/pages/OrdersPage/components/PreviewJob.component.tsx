import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import SinglePreviewWrapper from './SinglePreviewWrapper.component'
import React, { type ReactElement } from 'react'

const PreviewJob = (): ReactElement => {
  return (
        <SinglePreviewWrapper>
            <div>
                <p>ID: 1</p>
                <p>Nazwa: koszenie</p>
                <p>Koszt: 2500</p>
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </div>
        </SinglePreviewWrapper>
  )
}

export default PreviewJob
