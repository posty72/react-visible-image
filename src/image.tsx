import * as React from 'react'
import { Base, BaseProps, propsToStrip } from './base'
import cleanProperties from './utility/clean-props'

export interface ImageProps extends BaseProps {}

export class Image extends Base<ImageProps> {
    render(): JSX.Element {
        const { initialImage, image } = this.props;
        const imageSrc: string = (this.state.isVisible) ? image : initialImage;
        const attributes: object = cleanProperties(this.props, propsToStrip);

        return (
            <img {...attributes} className={this.getClassName()} src={imageSrc} ref={(element) => { this.target = element; }} />
        );
    }
}
