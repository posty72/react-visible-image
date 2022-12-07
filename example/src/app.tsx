import * as React from "react";
import * as ReactDOM from "react-dom";
import { VisibleImage, useVisible } from "react-visible-image";

const IMAGES_TO_SHOW = 10;

const Images = () => (
    <div>
        {Array(IMAGES_TO_SHOW)
            .fill(0)
            .map((_, index) => (
                <VisibleImage
                    key={index}
                    initialSrc={`https://picsum.photos/40/30/?image=${index}`}
                    src={`https://picsum.photos/800/600?image=${index}`}
                    alt={`Image number 105`}
                    width={800}
                    height={600}
                    style={{
                        display: "block",
                        margin: "0 auto 100px",
                    }}
                />
            ))}
    </div>
);

const BackgroundImage = () => {
    const small = `https://picsum.photos/150/50?image=1`;
    const full = `https://picsum.photos/1500/500?image=1`;
    const ref = React.createRef<HTMLDivElement>();
    const show = useVisible(ref);
    const image = show ? full : small;

    return (
        <div
            ref={ref}
            className="background-image"
            style={{ backgroundImage: `url('${image}')` }}
        >
            <p>Content</p>
        </div>
    );
};

const App = () => (
    <div className="container-fluid content">
        <h1>React Visible Images</h1>
        <p>Scroll down to see the images load in.</p>
        <Images />
        <BackgroundImage />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
