/* eslint-env jest */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SingleLinkComponent from '../layout/nav/SingleLink.component'

// eslint-disable-next-line react/prop-types
const MockedComponent = ({ path, text }) => (
    <BrowserRouter>
        <SingleLinkComponent path={path} text={text} />
    </BrowserRouter>
)

it('should redirect to products page after click', () => {
  render(<MockedComponent path={'/products'} text='Produkty' />)
  const link = screen.getByTestId('link')
  fireEvent.click(link)
  expect(window.location.pathname).toBe('/products')
})

it('should redirect to jobs page after click', () => {
  render(<MockedComponent path={'/jobs'} text='Uslugi' />)
  const link = screen.getByTestId('link')
  fireEvent.click(link)
  expect(window.location.pathname).toBe('/jobs')
})
