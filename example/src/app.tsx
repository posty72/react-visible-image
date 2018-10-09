import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as VisibleImage from '../../src'

const NUM_IMAGES = 10

const { BackgroundImage, Image } = VisibleImage

class App extends React.Component {
    renderImages() {
        const images = []
        let index = 0

        while (index < NUM_IMAGES) {
            index++

            images.push(
                <div className="image-container" key={`image-${index}`}>
                    <Image
                        initialImage={`https://picsum.photos/40/30/?image=${index}`}
                        image={`https://picsum.photos/800/600?image=${index}`}
                        alt={`Image number ${index}`}
                    />
                </div>
            )
        }

        return images
    }

    renderBackgroundImages() {
        const images = []
        let index = 0

        while (index < NUM_IMAGES) {
            index++

            images.push(
                <BackgroundImage
                    element="section"
                    className="background-image"
                    image={`https://picsum.photos/1500/500?image=${index}`}
                    initialImage={`https://picsum.photos/15/5?image=${index}`}
                    onVisible={(data) => console.log(data)}
                    key={`BackgroundImage-${index}`}
                >
                    <p>Content</p>
                </BackgroundImage>
            )
        }

        images.push(
            <BackgroundImage
                element="section"
                className="background-image"
                image={null}
                key={`BackgroundImage-${index}`}
            >
                <p>Content</p>
            </BackgroundImage>
        )

        return images
    }

    render() {
        return (
            <div className="container-fluid content">
                <h1>React Visible Images</h1>
                {this.renderImages()}
                {this.renderBackgroundImages()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
