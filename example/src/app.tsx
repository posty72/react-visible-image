import * as React from "react"
import * as ReactDOM from "react-dom"
import { VisibleImage, useVisible } from "../../src"

const App = () => {
    const renderImages = () => {
        return (
            <div>
                <VisibleImage
                    initialSrc={`https://picsum.photos/40/30/?image=105`}
                    src={`https://picsum.photos/800/600?image=105`}
                    alt={`Image number 105`}
                />
            </div>
        )
    }

    const renderBackgroundImage = () => {
        const small = `https://picsum.photos/15/5?image=105`
        const full = `https://picsum.photos/1500/500?image=105`
        const ref = React.createRef<HTMLDivElement>()
        const show = useVisible(ref)
        const image = show ? full : small

        return (
            <div
                ref={ref}
                className="background-image"
                style={{ backgroundImage: `url('${image}')` }}
            >
                <p>Content</p>
            </div>
        )
    }

    return (
        <div className="container-fluid content">
            <h1>React Visible Images</h1>
            {renderImages()}
            {renderBackgroundImage()}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))
