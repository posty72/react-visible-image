/// <reference types="react" />
import * as React from 'react';
import './polyfill/intersection-observer';
export interface BaseProps {
    image: string;
    className?: string;
    loadingClassName?: string;
    onVisible?: Function;
    initialImage?: string;
    shouldShow?: boolean;
    data?: any;
    role?: any;
    htmlFor?: any;
    id?: any;
    tabIndex?: any;
    title?: any;
}
export interface BaseState {
    isVisible: boolean;
}
export declare const propsToStrip: string[];
export declare class Base<T extends BaseProps> extends React.Component<T, BaseState> {
    observer: IntersectionObserver;
    target: Element;
    constructor();
    componentWillReceiveProps(nextProps?: any): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: BaseProps, prevState: BaseState): void;
    getClassName(): string;
    showImage(): void;
    handleIntersect(entries: Array<any>): void;
}
