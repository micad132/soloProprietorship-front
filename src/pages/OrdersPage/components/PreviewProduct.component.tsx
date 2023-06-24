import React from 'react'
import SinglePreviewWrapper from './SinglePreviewWrapper.component'
import { type ReactElement } from 'react'

interface Props {
  id: number
  name: string
  price: number
  weight: number
}

const PreviewProduct = ({ id, name, price, weight }: Props): ReactElement => {
  return (
        <SinglePreviewWrapper>
            <div>
                <p>ID: {id}</p>
                <p>Nazwa: {name}</p>
                <p>Cena: {price}</p>
                <p>Waga: {weight}</p>
            </div>
        </SinglePreviewWrapper>
  )
}

export default PreviewProduct
