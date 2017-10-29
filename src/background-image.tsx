import * as React from 'react'
import { Base, BaseProps, propsToStrip } from './base'
import { cleanProps } from './utility/clean-props'

export interface BackgroundImageProps extends BaseProps {
    element?: JSX.Element | string
    style?: object
    children?: any
}

export class BackgroundImage extends Base<BackgroundImageProps> {

    // Helper
    getImage(): object {
        const { image, initialImage, style } = this.props
        const {isVisible} = this.state

        if (!isVisible && initialImage) {
            return { ...style, backgroundImage: `url(${initialImage})` }
        }

        if (isVisible && image) {
            return { ...style, backgroundImage: `url(${image})` }
        }

        return null
    }

    // Render
    render(): JSX.Element {
        const { children, element, initialImage, image, style } = this.props
        const backgroundImage = this.getImage()
        const Element: any = element || 'div'
        const backgroundImagePropsToStrip = [
            'element',
            'children',
            'style'
        ].concat(propsToStrip)
        const attributes: object = cleanProps(this.props, backgroundImagePropsToStrip)

        return (
            <Element {...attributes} className={this.getClassName()} style={backgroundImage} ref={(input) => { this.target = input }}>
                {children}
            </Element>
        )
    }
}
