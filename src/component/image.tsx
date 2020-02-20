import * as React from "react"
import { Base, BaseProps, propsToStrip } from "../base"
import { cleanProps } from "../utility/clean-props"

export interface ImageProps extends BaseProps {
    alt?: string
    height?: string | number
    width?: string | number
    poster?: any
}

export class Image extends Base<ImageProps> {
    render(): JSX.Element {
        const { initialImage, image } = this.props
        const { isVisible, hasIntersectionObserver } = this.state
        const imageSrc =
            isVisible && hasIntersectionObserver ? image : initialImage
        const attributes = cleanProps(this.props, propsToStrip)

        return (
            <img
                {...attributes}
                className={this.getClassName()}
                src={imageSrc}
                ref={element => {
                    this.target = element
                }}
            />
        )
    }
}
