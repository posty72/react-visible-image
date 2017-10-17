import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as VisibleImage from '../../dist/main.js'

const NUM_IMAGES = 10;

const { BackgroundImage, Image } = VisibleImage;

class App extends React.Component {
    renderImages()  {
        const images = [];
        let index = 0;

        while (index < NUM_IMAGES) {
            index++;

            images.push(
                <div className="image-container" key={index}>
                    <Image
                        shouldShow={true}
                        initialImage={`https://unsplash.it/40/30/?image=${index}`}
                        image={`https://unsplash.it/800/600?image=${index}`}
                    />
                </div>
            );
        }
        return images;
    }

    renderBackgroundImages() {
        const images = [];
        let index = 0;

        while (index < NUM_IMAGES) {
            index++;

            images.push(
                <BackgroundImage
                    tagType="section"
                    className="background-image"
                    initialImage={`https://unsplash.it/75/25?image=${index}`}
                    image={`https://unsplash.it/1500/500?image=${index}`}
                    key={index}
                >
                <p>Content</p>
                </BackgroundImage>
            );
        }
        return images;
    }

    render() {
        return (
            <div className="container-fluid content">
            <h1>React Visible Images</h1>
            {this.renderImages()}
            {this.renderBackgroundImages()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
