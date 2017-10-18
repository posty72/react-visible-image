import * as React from 'react'
import { Base, BaseProps, propsToStrip } from './base'
import cleanProperties from './utility/clean-props'

export interface BackgroundImageProps extends BaseProps {
    element?: any
    style?: object
    children?: any
}

export class BackgroundImage extends Base<BackgroundImageProps> {
    render(): JSX.Element {
        const { children, element, initialImage, image, style } = this.props;
        const backgroundImage: object = (this.state.isVisible) ?
                { ...this.props.style, backgroundImage: `url(${image})` } :
                { ...style, backgroundImage: `url(${initialImage})` };
        const Element: any = element || 'div';
        const attributes: object = cleanProperties(this.props, [
            'element',
            'children',
            'style'
        ].concat(propsToStrip));

        return (
            <Element {...attributes} className={this.getClassName()} style={backgroundImage} ref={(input) => { this.target = input; }}>
                {children}
            </Element>
        );
    }
}
