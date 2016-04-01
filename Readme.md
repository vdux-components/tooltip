
# tooltip

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Simple tooltip component

## Installation

    $ npm install vdux-tooltip

## Usage

Renders your `message` as a tooltip over `children` when the user hovers over `children` for `delay|0` or more seconds.

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

  * `message` - The content of the tooltip. This may be just a string or it may be JSX elements.
  * `placement` - Defaults to `left`. One of `top/right/bottom/left`. Specifies where the tooltip should appear relative to the container.
  * `delay` - Optional. Defaults to 0. How long to wait before showing the tooltip after the user hovers over `children`.
  * `space` - Optional. Defaults to 0. Add extra padding away from the element when the tooltip is positioned.
  * `class` - A class to apply to the tooltip's container when it renders.
  * `style` - Style properties you want to apply to the outermost container.

## API - children

The children of the tooltip are what the tooltip is for. They are rendered normally as if the tooltip wasn't there.

## License

MIT
