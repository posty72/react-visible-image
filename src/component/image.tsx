import * as React from "react";
import { useVisible } from "../hook/use-visible";

type ImgProps = JSX.IntrinsicElements["img"];
export interface ImageProps extends ImgProps {
    initialSrc?: string;
    show?: boolean;
    loadingClassName?: string;
    onAppear?: () => void;
    onVisibilityChanged?: (isVisible: boolean) => void;

    /**
     * @deprecated Use 'show' instead
     */
    forceShow?: boolean;
    /**
     * @deprecated Use 'onAppear' instead
     */
    onShown?: () => void;
}

export const VisibleImage = ({
    initialSrc,
    show,
    loadingClassName,
    className,
    onAppear,
    onVisibilityChanged,
    forceShow,
    onShown,
    ...attributes
}: ImageProps) => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const isVisible = useVisible(imageRef);
    const onAppearCallback = onAppear ?? onShown;

    const isShown = show ?? forceShow ?? isVisible;
    const initialImageSrc = initialSrc ? initialSrc : "";
    const imgSrc = isShown ? attributes.src : initialImageSrc;
    const imgClasses = [];

    React.useEffect(() => {
        if (onVisibilityChanged) {
            onVisibilityChanged(isVisible);
        }

        if (isVisible && onAppearCallback) {
            onAppearCallback();
        }
    }, [isVisible, onAppearCallback, onVisibilityChanged]);

    if (className) {
        imgClasses.push(className);
    }

    if (!isShown && loadingClassName) {
        imgClasses.push(loadingClassName);
    }

    const imageClass = imgClasses.length > 0 ? imgClasses.join(" ") : undefined;

    return (
        <img
            {...attributes}
            className={imageClass}
            ref={imageRef}
            src={imgSrc}
        />
    );
};
