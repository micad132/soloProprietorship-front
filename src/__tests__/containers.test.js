/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import DeletingContainer from '../containers/DeletingContainer.container'

it('should deleting container modal be visible', () => {
  render(<DeletingContainer id={1} name='marchewka' operationName={''}/>)
})
