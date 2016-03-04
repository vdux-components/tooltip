/**
 * Imports
 */

import CSSTransition from 'vdux-css-transition'
import Position from 'vdux-position'
import element from 'vdux/element'
import Hover from 'vdux-hover'

/**
 * Tooltip
 */

function render ({path, props, children}) {
  const {message, delay = 0, transition} = props

  return (
    <span id={path}>
      <Hover delay={delay}>
        {children}
        {
          hover => (
            <CSSTransition timeout={transition}>
              {
                hover && <InnerTooltip {...props} key='tooltip' near={path}>{message}</InnerTooltip>
              }
            </CSSTransition>
          )
        }
      </Hover>
    </span>
  )
}

function InnerTooltip ({props, children}) {
  const {placement = 'top', near, space = 0, style = {}} = props

  return (
    <Position placement={placement} near={near} space={space}>
      <div class={props.class} style={{...defaultStyle, ...style}}>
        {children}
      </div>
    </Position>
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
