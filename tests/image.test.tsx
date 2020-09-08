import * as React from "react"
import * as renderer from "react-test-renderer"
import { VisibleImage } from "../src/component/image"

describe("Image component", () => {
    it("renders correctly with an image", () => {
        const tree = renderer
            .create(
                <VisibleImage
                    initialSrc="https://twitter.com"
                    src="http://www.facebook.com"
                />
            )
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it("renders correctly without an image", () => {
        const tree = renderer
            .create(<VisibleImage src="http://www.facebook.com" />)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it("should return the default loading class name", () => {
        // To get the loading state to appear in a Node environment
        ;(globalThis as any).IntersectionObserver = () => null

        const element = renderer
            .create(
                <VisibleImage
                    loadingClassName="is-loading"
                    src="http://github.com"
                />
            )
            .toTree()

        const image = element.rendered as renderer.ReactTestRendererTree

        expect(image.props.className.includes("is-loading")).toBe(true)
    })
})
