/// <reference types="react" />
import * as React from 'react';
import './polyfill/intersection-observer';
export interface BaseProps {
    className?: string;
    loadingClassName?: string;
    onVisible?: Function;
    image: string;
    initialImage?: string;
    shouldShow?: boolean;
}
export interface BaseState {
    isVisible: boolean;
}
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
