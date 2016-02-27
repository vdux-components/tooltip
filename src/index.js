/**
 * Imports
 */

import Transition from 'vdux-transition'
import Position from 'vdux-position'
import element from 'vdux/element'
import Hover from 'vdux-hover'
import Delay from 'vdux-delay'

/**
 * Tooltip
 */

function render ({path, props, children}) {
  const {message, delay = 0, placement = 'top', style = {}, space = 0} = props

  return (
    <span id={path}>
      <Hover>
        {children}
        {
          hover => (
            <Transition>
              {
                hover && <InnerTooltip {...props} key='tooltip' near={path}>{message}</InnerTooltip>
              }
            </Transition>
          )
        }
      </Hover>
    </span>
  )
}

const InnerTooltip = {
  render ({props, children}) {
    const {delay, placement, near, space, style} = props
    const {entering, leaving, didEnter, didLeave} = props.transition

    console.log('tooltip', props.transition)

    return (
      <Delay time={delay}>
        <Position placement={placement} near={near} space={space}>
          <div class={[props.class, {entering, leaving}]} style={{...defaultStyle, ...style}}>
            <Delay time={3000} onEnd={didEnter} />
            {children}
            {entering && 'ENTERING!!'}
            {
              leaving && (
                <span>
                  LEAVING!!
                  <Delay time={3000} onEnd={didLeave} />
                </span>
              )
            }
          </div>
        </Position>
      </Delay>
    )
  }
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
