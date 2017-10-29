import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import * as VisibleImage from '../../src/index'
import * as VisibleImage from '../../dist/main'

const NUM_IMAGES = 10

const { BackgroundImage, Image } = VisibleImage

class App extends React.Component {
    renderImages()  {
        const images = []
        let index = 0

        while (index < NUM_IMAGES) {
            index++

            images.push(
                <div className="image-container" key={index}>
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
                    onVisible={(data) => console.log(`Image number ${index} has appeared`, data)} // tslint:disable-line no-console
                    key={index}
                >
                    <p>Content</p>
                </BackgroundImage>
            )
        }

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
