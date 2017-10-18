import * as React from 'react'
import './polyfill/intersection-observer'

export interface BaseProps {
    className?: string
    shouldShow?: boolean
    loadingClassName?: string,
    initialImage?: string,
    image: string
}

export interface BaseState {
    isVisible: boolean
}

export class Base<T extends BaseProps> extends React.Component<T, BaseState> {
    observer: IntersectionObserver = null
    target: Element = null

    constructor() {
        super();

        this.state = {
            isVisible: false
        };
    }

    componentWillReceiveProps(nextProps ?: any): void {
        if (this.props.shouldShow !== nextProps.shouldShow) {
            this.setState({
                isVisible: nextProps.shouldShow
            });
        }
    }

    componentDidMount(): void {
        console.log(this.target);

        if (this.props.shouldShow === true) {
            this.showImage();
        } else if (this.props.shouldShow !== false && this.target) {
            this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
                rootMargin: '20px',
                threshold: 0
            });

            this.observer.observe(this.target);
        }
    }

    componentDidUpdate() {
        // Fire callback
    }

    getClassName(): string {
        const { className, loadingClassName } = this.props;
        const loadingClass: string = loadingClassName || 'is-loading';
        const { isVisible } = this.state;

        if (!isVisible && className) {
            return `${className} ${loadingClass}`;
        } else if (!isVisible) {
            return loadingClass;
        }

        return className || '';
    }

    showImage(): void {
        this.setState({
            isVisible: true
        }, () => {
            this.observer = null;
        });
    }

    handleIntersect(entries: Array<any>): void {
        const { initialImage, image } = this.props;

        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.intersectionRatio > 0) {
                if (initialImage) {
                    // Load full image in the background first
                    const imageLoading: any = new Image();
                    imageLoading.src = image;
                    imageLoading.onload = () => this.showImage();
                } else {
                    this.showImage();
                }
            }
        });
    }
}
