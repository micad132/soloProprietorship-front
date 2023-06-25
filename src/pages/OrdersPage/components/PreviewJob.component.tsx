import SinglePreviewWrapper from './SinglePreviewWrapper.component'
import React, { type ReactElement } from 'react'

interface Props {
  id: number
  name: string
  price: number
}

const PreviewJob = ({ id, name, price }: Props): ReactElement => {
  return (
        <SinglePreviewWrapper>
            <div data-testid='singlePreviewWrapper'>
                <p>ID: {id}</p>
                <p>Nazwa: {name}</p>
                <p>Koszt: {price}</p>
            </div>
        </SinglePreviewWrapper>
  )
}

export default PreviewJob
