/**
 * Imports
 */

import Delay from 'vdux-delay'
import {Tooltip} from 'vdux-ui'
import element from 'vdux/element'
import createAction from '@f/create-action'
import handleActions from '@f/handle-actions'

/**
 * Tooltip container component
 */

function render ({props, state, local, children}) {
  const {ui = Tooltip, message, delay = 0, ...otherProps} = props
  const {hover, start} = state
  const Tt = ui

  return (
    <span onMouseEnter={local(mouseEnter)} onMouseLeave={local(mouseLeave)} style={{position: 'relative', overflow: 'visible'}}>
      {children}
      <Tt {...otherProps} show={hover}>
        {message}
      </Tt>
      {
        start && <Delay time={delay} onEnd={local(hoverReady)} />
      }
    </span>
  )
}

/**
 * Actions
 */

const mouseEnter = createAction('<Tooltip/>: Hover start')
const hoverReady = createAction('<Tooltip/>: Hover ready')
const mouseLeave = createAction('<Tooltip/>: Hover out')

/**
 * Reducer
 */

const reducer = handleActions({
  [mouseEnter]: state => ({...state, start: true}),
  [hoverReady]: state => ({...state, hover: true, start: false}),
  [mouseLeave]: state => ({...state, hover: false, start: false})
})

/**
 * Exports
 */

export default {
  render,
  reducer
}
