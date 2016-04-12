/**
 * Imports
 */

import test from 'tape'
import vdux from 'vdux/dom'
import Tooltip from '../src'
import element from 'vdux/element'
import trigger from '@f/trigger-event'

/**
 * Tests
 */

test('should work', t => {
  const {subscribe, render} = vdux()
  const stop = subscribe(a => a)

  render(<Tooltip class='tooltip' message='test message'><div id='target'>hover me</div></Tooltip>)
  t.equal($('.vui-tooltip').style.top, '-10000px')
  t.plan(3)

  setTimeout(() => {
    trigger($('#target'), 'mouseenter', {bubbles: true})
    render(<Tooltip class='tooltip' message='test message'><div id='target'>hover me</div></Tooltip>)

    setTimeout(() => {
    render(<Tooltip class='tooltip' message='test message'><div id='target'>hover me</div></Tooltip>)

      t.deepEqual($('.vui-tooltip').innerText.trim(), 'test message')
      t.notEqual($('.vui-tooltip').style.top, '-10000px')
      t.end()
      stop()
    }, 500)
  })
})

/**
 * Helpers
 */

function $ (selector) {
  return document.querySelector(selector)
}
