import * as React from "react";
import { useVisible } from "../hook/use-visible";

type ImgProps = JSX.IntrinsicElements["img"];
export interface ImageProps extends ImgProps {
    initialSrc?: string;
    forceShow?: boolean;
    loadingClassName?: string;
    onShown?: () => void;
    onVisibilityChanged?: (isVisible: boolean) => void;
}

export const VisibleImage = ({
    initialSrc,
    forceShow,
    loadingClassName,
    className,
    onShown,
    onVisibilityChanged,
    ...attributes
}: ImageProps) => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const isVisible = useVisible(imageRef);

    const show = isVisible || forceShow;
    const initialImageSrc = initialSrc ? initialSrc : "";
    const imgSrc = show ? attributes.src : initialImageSrc;
    const imgClasses = [];

    React.useEffect(() => {
        if (onVisibilityChanged) {
            onVisibilityChanged(isVisible);
        }

        if (isVisible && onShown) {
            onShown();
        }
    }, [isVisible, onShown, onVisibilityChanged]);

    if (className) {
        imgClasses.push(className);
    }

    if (!show && loadingClassName) {
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
