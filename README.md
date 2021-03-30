# React Visible Image

React Visible Image is designed to solve the problem of loading full-sized images before they're seen on the screen, which in some cases could be not at all. It uses the the IntersectionObserver API to determine if a user has scrolled past the image or not.·

<br />

<a href="https://github.com/posty72/react-visible-image/issues">Report Bug</a>
·
<a href="https://github.com/posty72/react-visible-image/issues">Request Feature</a>

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Poyfill](#polyfill)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

## Getting Started

To install React Visible Image into your React app, follow these steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
-   React
-   [Polyfill](#polyfill) (only if your supporting browsers that don't provide the [IntersectionObserver API](https://caniuse.com/#feat=intersectionobserver))

### Installation

2. Install NPM packages

```sh
npm install react-visible-image
```

## Usage

### Using the component

The main output of this package is a simple `VisibleImage` component that you can use as a drop-in replacement for normal `<img />` tags. Any props that can be passed to `<img />` can be passed to `VisibleImage`.

```js
import { VisibleImage } from `react-visible-image`

const ContentBlock = () => (
    <figure>
        <VisibleImage src="path/to/image.jpg" alt="Image description" />
        <figcaption>An informative caption</figcaption>
    </figure>
);
```

| Prop                    | Type                           | Description                                                                                                                      |
| ----------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **forceShow**           | boolean                        | If set to `true`, the image will always show. If set to `false`, either the `initialSrc` will be used or nothing will.           |
| **loadingClassName**    | string                         | Specifies a class to apply to the `VisibleImage` before the image has loaded                                                     |
| **initialSrc**          | string                         | An image to use before the image appears on screen. Useful for animation, SEO purposes and to stop the page height jumping.      |
| **onShown**             | `() => void`                   | Callback when the element becomes visible. Useful for keeping the visibility as part of the app state alongside `forceShow`      |
| **onVisibilityChanged** | `(isVisible: boolean) => void` | Callback when the element's visibility changes. Useful for keeping the visibility as part of the app state alongside `forceShow` |

---

### Using the hook

There are cases where using an `<img />` tag doesn't fit the purpose, for example when applying a background image to an element. For these cases, the hook can be applied.

```js
import React, { useRef } from 'react'
import { useVisible } from `react-visible-image`

const ContentBlock = () => {
    const imageSet = {
        initial: '/path/to/small/image',
        full: '/path/to/full/image',
    }
    const ref = useRef()
    const visible = useVisible(ref)
    const image = visible ? imageSet.full : imageSet.initial;

    return (
        <div ref={ref} style={{backgroundImage: `url('${image}')`}}>
            {shown &&
                <p>Seen!</p>
            ||
                <p>Not seen...</p>
            }
        </div>
    );
}
```

## Polyfill

If you need to support browsers that don't have the IntersectionObserver API, include the polyfill by installing it using:

```sh
npm install intersection-observer
```

Then add it to your app with:

```js
import "intersection-observer";
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Josh Post - [@posty72](https://twitter.com/posty72)

Project Link: [https://github.com/posty72/react-visible-image](https://github.com/posty72/react-visible-image)
