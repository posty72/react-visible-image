import * as React from 'react'

export interface BaseProps {
    className?: string
    loadingClassName?: string
    onVisible?: Function
    image: string
    initialImage?: string
    shouldShow?: boolean
    data?: any
    role?: any
    htmlFor?: any
    id?: any
    tabIndex?: any
    title?: any
}

export interface BaseState {
    isVisible: boolean
}

export const propsToStrip = [
    'loadingClassName',
    'onVisible',
    'image',
    'initialImage',
    'shouldShow'
]

export class Base<T extends BaseProps> extends React.Component<T, BaseState> {
    observer: IntersectionObserver = null
    target: Element = null
    state: BaseState = {
        isVisible: false
    }

    constructor(props: null) {
        super(props)

        if (typeof window !== undefined && !('IntersectionObserver' in window)) {
            this.importIntersectionObserver()
        }
    }

    // Lifecycle
    componentWillReceiveProps(nextProps?: any): void {
        if (this.props.shouldShow !== nextProps.shouldShow) {
            this.setState({
                isVisible: nextProps.shouldShow
            })
        }
    }

    componentDidMount(): void {
        if (this.props.shouldShow === true) {
            this.showImage()
        } else if (this.target instanceof HTMLElement) {
            this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
                rootMargin: '20px',
                threshold: 0
            })

            this.observer.observe(this.target)
        }
    }

    componentDidUpdate(prevProps: BaseProps, prevState: BaseState): void {
        // Fire callback
        if (this.props.onVisible && prevState.isVisible !== this.state.isVisible) {
            this.props.onVisible()
        }
    }

    // Helper
    public getClassName(): string {
        const { className, loadingClassName } = this.props
        const loadingClass: string = loadingClassName || 'is-loading'
        const { isVisible } = this.state

        if (!isVisible && className) {
            return `${className} ${loadingClass}`
        }

        if (!isVisible) {
            return loadingClass
        }

        return className || ''
    }

    public showImage(): void {
        this.setState({
            isVisible: true
        }, () => {
            this.observer.unobserve(this.target)
        })
    }

    // Handler
    public handleIntersect(entries: Array<any>): void {
        const { initialImage, image } = this.props

        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.intersectionRatio > 0) {
                // Load full image in the background first
                const imageLoading: any = new Image()
                imageLoading.src = image
                imageLoading.onload = () => this.showImage()
            }
        })
    }

    private async importIntersectionObserver() {
        await import('intersection-observer')
    }
}
