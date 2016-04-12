/**
 * Imports
 */

import element from 'vdux/element'
import {Tooltip, Block} from 'vdux-ui'
import createAction from '@f/create-action'
import handleActions from '@f/handle-actions'

/**
 * Tooltip container component
 */

function render ({props, state, local, children}) {
  const {ui: Tt = Tooltip, message, ...otherProps} = props
  const {linger} = state

  return (
    <Block tag='span' onLingerChange={local(lingerChange)} relative overflow='visible'>
      {children}
      <Tt {...otherProps} show={linger}>
        {message}
      </Tt>
    </Block>
  )
}

/**
 * Actions
 */

const lingerChange = createAction('<Tooltip/>: Linger change', null, () => ({logLevel: 'debug'}))

/**
 * Reducer
 */

const reducer = handleActions({
  [lingerChange]: (state, linger) => ({...state, linger})
})

/**
 * Exports
 */

export default {
  render,
  reducer
}
