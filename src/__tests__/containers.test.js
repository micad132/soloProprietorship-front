/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import DeletingContainer from '../containers/DeletingContainer.container'
import { Provider } from 'react-redux'
import { store } from '../store'

const MockedDeletingContainer = () => <Provider store={store}>
  <DeletingContainer id={1} name='marchewka' operationName={''}/>
</Provider>

it('should deleting container modal be visible', () => {
  render(<MockedDeletingContainer />)
})
