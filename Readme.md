
# tooltip

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Simple tooltip component

## Installation

    $ npm install vdux-tooltip

## Usage

Renders your `message` as a tooltip over `children` when the user [lingers](https://github.com/vdux-components/css-emulator#linger-state) over `children`.

```javascript
import Tooltip from 'vdux-tooltip'

function render () {
  return (
    <Tooltip message='Signup today!' delay={400}>
      <button>Register</button>
    </Tooltip>
  )
}
```

## API - props

  * `ui` - Optional, defaults to vdux-ui's Tooltip component. This is the UI element used to render your tooltip component
  * `message` - The content of the tooltip. This may be just a string or it may be JSX elements.
  * `placement` - Defaults to `left`. One of `top/right/bottom/left`. Specifies where the tooltip should appear relative to the container.
  * `space` - Optional. Defaults to 0. Add extra padding away from the element when the tooltip is positioned.
  * `...rest` - Any other props will be forwarded to the tooltip UI component.

## API - children

The children of the tooltip are what the tooltip is for. They are rendered normally as if the tooltip wasn't there.

## License

MIT
