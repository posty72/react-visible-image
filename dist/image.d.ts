/// <reference types="react" />
import { Base, BaseProps } from './base';
export interface ImageProps extends BaseProps {
    alt?: any;
    height?: any;
    width?: any;
    poster?: any;
}
export declare class Image extends Base<ImageProps> {
    render(): JSX.Element;
}
