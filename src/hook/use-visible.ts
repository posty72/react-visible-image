import { useEffect, useState } from "react";

/**
 *
 * @param node HTML element to watch to become visible
 * @param observerOptions IntersectionObserver options
 */
export function useVisible(
    node: React.MutableRefObject<HTMLElement>,
    observerOptions: IntersectionObserverInit = {}
) {
    const isAvailable = typeof globalThis.IntersectionObserver === "function";
    const [isVisible, setVisibilty] = useState(!isAvailable);
    let observer: IntersectionObserver = null;

    const handleObserverUpdate: IntersectionObserverCallback = (entries) => {
        const entry = entries[0];

        if (entry.intersectionRatio > 0) {
            setVisibilty(true);
        }
    };

    if (isAvailable) {
        observer = new IntersectionObserver(
            handleObserverUpdate,
            observerOptions
        );
    }

    useEffect(() => {
        const element = node.current;

        if (!element || !observer) {
            return;
        }

        observer.observe(element);

        return () => observer.unobserve(element);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isVisible;
}
