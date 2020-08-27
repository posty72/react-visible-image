import * as React from "react"
import { useVisible } from "../hook/use-visible"

type ImgProps = JSX.IntrinsicElements["img"]
export interface ImageProps extends ImgProps {
    onShown?: () => void
    initialSrc?: string
    forceShow?: boolean
    loadingClassName?: string
}

export const VisibleImage: React.FunctionComponent<ImageProps> = ({
    initialSrc,
    forceShow,
    loadingClassName,
    className,
    onShown,
    ...attributes
}) => {
    const imageRef = React.useRef<HTMLImageElement>()
    const isVisible = useVisible(imageRef)

    const show = isVisible || forceShow
    const initialImageSrc = initialSrc ? initialSrc : ""
    const imgSrc = show ? attributes.src : initialImageSrc
    const getClass = () =>
        !show && loadingClassName
            ? `${loadingClassName} ${className}`
            : className

    return (
        <img
            {...attributes}
            className={getClass()}
            ref={imageRef}
            src={imgSrc}
        />
    )
}
