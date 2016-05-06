/**
 * Imports
 */

import {wrap, CSSContainer} from 'vdux-containers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import {Tooltip, Block} from 'vdux-ui'
import element from 'vdux/element'

/**
 * Tooltip container component
 */

function render ({props, children}) {
  const {ui: Tt = Tooltip, message, show, ...otherProps} = props

  return (
    <Block tag='span' relative overflow='visible'>
      {children}
      <Tt {...otherProps} show={show}>
        {message}
      </Tt>
    </Block>
  )
}

/**
 * Exports
 */

export default wrap(CSSContainer, {
  lingerProps: {
    show: true
  }
})({
  render
})
