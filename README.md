# React Visible Images
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/pixelfusion/react-visible-image)

Highly customizable react component for only images that are in the viewport

## Requirements
- React

## Installation
```
npm install react-visible-image --save-dev
```

```
import { BackgroundImage, Image } from `react-visible-image`

class App extends React.Component {
    render() {
        return (
            <div>
                // Only loads this image when the user scrolls to it
                <Image image="path/to/image.jpg" />

                // Will only apply the style.backgroundImage when user scrolls to it
                <BackgroundImage
                    element="section"
                    className="background-image"
                    image="path/to/image.jpg"
                >
                    <p>Content</p>
                </BackgroundImage>
            </div>
        )
    }
}
```

## Browser Support

### Supported
- Chrome 50+
- Firefox 55+
- Edge 15+
- Opera 47+
- Safari\* (includes iOS)

\*Using the included polyfill

### Unsupported
- Internet Explorer


## Testing
_Coming soon_


## Usage

### BackgroundImage and Image

- `shouldShow`: boolean
Overrides the internal state of `BackgroundImage|Image`. If set to `true`, the image will always show. If set to `false`, either the `initialImage` will show or nothing will.

- `loadingClassName`: string
Specifies a class to apply to the `BackgroundImage|Image` before the image has loaded

- `initialImage`: string
An image to use before the image appears on screen. Useful for animation and search engine purposes.

- `onVisible`: Function
Calls the function when the element becomes visible. Useful for keeping the component as part of the app state alongside `shouldShow`

### BackgroundImage
`BackgroundImage` can be used as a wrapper to contain children elements

- `element`: string
An HTML element to use as the `BackgroundImage` element
