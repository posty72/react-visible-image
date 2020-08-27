import { useEffect, useState } from "react"

/**
 *
 * @param node HTML element to watch to become visible
 * @param observerOptions IntersectionObserver options
 */
export function useVisible(
    node: React.MutableRefObject<HTMLElement>,
    observerOptions: IntersectionObserverInit = {}
) {
    const [isVisible, setVisibilty] = useState(false)
    const handleObserverUpdate: IntersectionObserverCallback = entries => {
        const entry = entries[0]

        if (entry.intersectionRatio > 0) {
            setVisibilty(true)
        }
    }
    const observer = new IntersectionObserver(
        handleObserverUpdate,
        observerOptions
    )

    useEffect(() => {
        const element = node.current

        if (!element) {
            return
        }

        observer.observe(element)

        return () => observer.unobserve(element)
    })

    return isVisible
}
