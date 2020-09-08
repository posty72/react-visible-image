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
    const enabled = typeof globalThis.IntersectionObserver === "function"
    const defaultVisible = !enabled
    const [isVisible, setVisibilty] = useState(defaultVisible)
    let observer: IntersectionObserver = null

    const handleObserverUpdate: IntersectionObserverCallback = entries => {
        const entry = entries[0]

        if (entry.intersectionRatio > 0) {
            setVisibilty(true)
        }
    }

    if (enabled) {
        observer = new IntersectionObserver(
            handleObserverUpdate,
            observerOptions
        )
    }

    useEffect(() => {
        const element = node.current

        if (!element || !observer) {
            return
        }

        observer.observe(element)

        return () => observer.unobserve(element)
    })

    return isVisible
}
