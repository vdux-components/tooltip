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
  const stop = run(state => <Tooltip class='tooltip' message='test message'><div id='target'>hover me</div></Tooltip>)
  t.plan(1)

  setTimeout(() => {
    trigger($('#target'), 'mouseover')

    setTimeout(() => {
      t.deepEqual($('.tooltip').innerText, 'test message')
      t.end()
      stop()
    }, 100)
  })
})

/**
 * Helpers
 */

function run (app) {
  const {subscribe, render} = vdux()
  return subscribe(state => render(app(state)))
}

function $ (selector) {
  return document.querySelector(selector)
}
