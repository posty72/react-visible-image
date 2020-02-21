# React Visible Images

[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/pixelfusion/react-visible-image)

Lightweight React component that only displays images that are in (or have been in) the viewport

## Installation

```
npm install react-visible-image
```

## Usage

### Component

The main output of this package is a simple `VisibleImage` component that you can use as a drop-in replacement for normal `<img />` tags.

```
import { VisibleImage } from `react-visible-image`

const ContentBlock = () => (
    <div>
        <VisibleImage src="path/to/image.jpg" alt="Image description" />
    </div>
);
```

| Prop                 | Type     | Description                                                                                                                           |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **forceShow**        | boolean  | If set to `true`, the image will always show. If set to `false`, either the `initialSrc` will be used or nothing will.                |
| **loadingClassName** | string   | Specifies a class to apply to the `VisibleImage` before the image has loaded                                                          |
| **initialSrc**       | string   | An image to use before the image appears on screen. Useful for animation, SEO purposes and to stop the page height jumping.           |
| **onShown**          | Function | Calls the function when the element becomes visible. Useful for keeping the component as part of the app state alongside `shouldShow` |

---

### Hook

```
import React, { useRef } from 'react'
import { useVisible } from `react-visible-image`

const ContentBlock = () => {
    const ref = useRef()
    const shown = useVisible(ref)

    return (
        <div ref={ref}>
            {shown &&
                <p>Seen!</p>
            ||
                <p>Not seen...</p>
            }
        </div>
    );
}
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
