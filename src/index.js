/**
 * Imports
 */

import Position from 'vdux-position'
import element from 'vdux/element'
import Hover from 'vdux-hover'
import Delay from 'vdux-delay'

/**
 * Tooltip
 */

function render ({path, props, children}) {
  const {message, delay = 0, placement = 'top', style = {}} = props

  return (
    <span id={path}>
      <Hover>
        {children}
        {
          hover => hover && (
            <Delay time={delay}>
              <Position placement={placement} near={path}>
                <div class={props.class} style={{...defaultStyle, ...style}}>
                  {message}
                </div>
              </Position>
            </Delay>
          )
        }
      </Hover>
    </span>
  )
}

/**
 * Style
 */

const defaultStyle = {
  display: 'block',
  zIndex: 99999,
  pointerEvents: 'none',
  position: 'absolute'
}

/**
 * Exports
 */

export default {
  render
}
