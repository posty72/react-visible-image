# React Visible Images

[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/pixelfusion/react-visible-image)

Highly customizable and lightweight React component that only displays images that are in (or have been in) the viewport

## Requirements

-   React

## Installation

```
npm install react-visible-image --save-dev
```

```
import { BackgroundImage, Image } from `react-visible-image`

const ContentBlock = () => (
    <div>
        {/* Only loads this image when the user scrolls to it */}
        <Image image="path/to/image.jpg" />

        {/* Will only apply the style.backgroundImage when user scrolls to it */}
        <BackgroundImage
            element="section"
            className="background-image"
            image="path/to/image.jpg">
            <p>lorem ipsum</p>
        </BackgroundImage>
    </div>
);
```

## Browser Support

Most browsers are supported, and Safari is supporting by importing the optional polyfill. If the `IntersectionObserver` isn't available in a browser, react-visible-image will simple render the image normally.

### Supported

-   Chrome 50+
-   Firefox 55+
-   Edge 15+
-   Opera 47+

### Unsupported

-   Safari\* (includes iOS)
-   Internet Explorer

\*Supported using the optional polyfill

### Polyfill

If you need to support Safari, include the polyfill by installing it using:

```
npm install intersection-observer
```

Then add it to your app with:

```
import 'intersection-observer';
```

## Testing

_Coming soon_

## Usage

### BackgroundImage and Image

| Prop                 | Type     | Description                                                                                                                                                                    |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **shouldShow**       | boolean  | Overrides the internal state of `BackgroundImage|Image`. If set to `true`, the image will always show. If set to `false`, either the `initialImage` will show or nothing will. |
| **loadingClassName** | string   | Specifies a class to apply to the `BackgroundImage|Image` before the image has loaded                                                                                          |
| **initialImage**     | string   | An image to use before the image appears on screen. Useful for animation and search engine purposes.                                                                           |
| **onVisible**        | Function | Calls the function when the element becomes visible. Useful for keeping the component as part of the app state alongside `shouldShow`                                          |

---

### BackgroundImage only

`BackgroundImage` can be used as a wrapper to contain children elements

| Prop        | Type   | Description                                             |
| ----------- | ------ | ------------------------------------------------------- |
| **element** | string | An HTML element to use as the `BackgroundImage` element |
