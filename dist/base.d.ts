/// <reference types="react" />
import * as React from 'react';
export interface BaseProps {
    className?: string;
    shouldShow?: boolean;
    loadingClassName?: string;
    initialImage?: string;
    image: string;
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
    getClassName(): string;
    showImage(): void;
    handleIntersect(entries: Array<any>): void;
}
