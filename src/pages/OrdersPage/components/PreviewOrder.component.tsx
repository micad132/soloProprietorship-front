import PreviewJob from './PreviewJob.component'
import PreviewProduct from './PreviewProduct.component'
import ModalComponentComponent from '../../../components/ModalComponent.component'
import { Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import PreviewWrapper from './PreviewWrapper.component'
import React, { type ReactElement, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks'
import { fetchingSingleTransaction, getSingleTransaction } from '../../../store/reducers/transactionReducer'

interface Props {
  id: number
}
const PreviewOrderComponent = ({ id }: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const singleTransaction = useAppSelector(getSingleTransaction)
  const previewJobs = singleTransaction.jobs.map(job => <PreviewJob key={job.idJob} id={job.idJob} name={job.name} price={job.price} />)
  const previewProducts = singleTransaction.products.map((product) =>
        <PreviewProduct key={product.idProduct} id={product.idProduct} name={product.name} price={product.price} weight={product.weight} />)

  const content = (
        <>
            <h4>Pogląd zamówienia nr {id}</h4>
            <PreviewWrapper text='Usługi' >
                {previewJobs}
            </PreviewWrapper>
            <PreviewWrapper text='Produkty' >
                {previewProducts}
            </PreviewWrapper>

        </>
  )
  return (
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<VisibilityIcon />}
                    data-testid='tableButton'
                    onClick={() => {
                      setIsOpen(true)
                      void dispatch(fetchingSingleTransaction(id))
                    }}
                >
                    Podglad
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => { setIsOpen(false) }} children={content} />
        </div>
  )
}

export default PreviewOrderComponent
