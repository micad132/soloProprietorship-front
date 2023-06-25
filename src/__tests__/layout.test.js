/* eslint-env jest */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SingleLinkComponent from '../layout/nav/SingleLink.component'
import Layout from '../layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../store'

// eslint-disable-next-line react/prop-types
const MockedComponent = ({ path, text }) => (
    <Provider store={store}>
        <BrowserRouter>
            <SingleLinkComponent path={path} text={text} />
        </BrowserRouter>
    </Provider>
)

const MockedLayout = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Layout children={<h1 data-testid='layoutTestText'>TEST</h1>} />
        </BrowserRouter>
    </Provider>
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

it('should layout contain proper content', () => {
    render(<MockedLayout />)
    const footer = screen.getByTestId('footerWrapper')
    const header = screen.getByTestId('headerWrapper')
    const layoutTestText = screen.getByTestId('layoutTestText')
    expect(footer).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(layoutTestText).toBeInTheDocument()
})
