/// <reference types="react" />
import { Base, BaseProps } from './base';
export interface BackgroundImageProps extends BaseProps {
    element?: any;
    style?: object;
    children?: any;
}
export declare class BackgroundImage extends Base<BackgroundImageProps> {
    getImage(): object;
    render(): JSX.Element;
}
