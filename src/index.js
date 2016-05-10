/**
 * Imports
 */

import {wrap, CSSContainer} from 'vdux-containers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import {Tooltip, Base} from 'vdux-ui'
import element from 'vdux/element'

/**
 * Tooltip container component
 */

function render ({props, children}) {
  const {ui: Tt = Tooltip, message, show, placement, space, tooltipProps = {}, ...otherProps} = props

  return (
    <Base relative overflow='visible' {...otherProps}>
      {children}
      <Tt placement={placement} space={space} show={show} {...tooltipProps}>
        {message}
      </Tt>
    </Base>
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
