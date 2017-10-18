import * as React from 'react'
import { Base, BaseProps } from './base'
import cleanProperties from './utility/clean-props'

export interface BackgroundImageProps extends BaseProps {
    tagType?: any
    style?: object
    children?: any
}

export class BackgroundImage extends Base<BackgroundImageProps> {
    render(): JSX.Element {
        const { children, initialImage, image, style, tagType } = this.props;
        const backgroundImage: object = (this.state.isVisible) ?
                { ...this.props.style, backgroundImage: `url(${image})` } :
                { ...style, backgroundImage: `url(${initialImage})` };
        const Element: any = tagType || 'div';
        const attributes: object = cleanProperties(this.props, [
            'tagType',
            'children',
            'shouldShow',
            'initialImage',
            'style'
        ]);

        return (
            <Element {...attributes} className={this.getClassName()} style={backgroundImage} ref={(input) => { this.target = input; }}>
                {children}
            </Element>
        );
    }
}
