import * as React from "react"
import * as TestUtils from "react-dom/test-utils"
import * as renderer from "react-test-renderer"
import { VisibleImage } from "./component/image"

test("renders correctly with an image", () => {
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

test("renders correctly without an image", () => {
    const tree = renderer
        .create(<VisibleImage src="http://www.facebook.com" />)
        .toJSON()

    expect(tree).toMatchSnapshot()
})

test("should return the default loading class name", () => {
    const image = renderer.create(<VisibleImage src="http://github.com" />)

    console.log(image.root.instance)

    expect(image.root.instance).toBe("is-loading")
})

// test("should return a provided loading class name", () => {
//     const image = TestUtils.renderIntoDocument(
//         <VisibleImage src="http://github.com" loadingClassName="test-class" />
//     )

//     expect(image.getClassName()).toBe("test-class")
// })

// test("should not return a loading class name when image is visible", () => {
//     const image = TestUtils.renderIntoDocument(
//         <VisibleImage src="http://github.com" forceShow={true} />
//     )

//     expect(image.getClassName()).toBe("")
// })

// test("should not return a loading class name when image is visible and loading class is passed", () => {
//     const image = TestUtils.renderIntoDocument(
//         <VisibleImage
//             src="http://github.com"
//             loadingClassName="test-class"
//             forceShow={true}
//         />
//     )

//     expect(image.getClassName()).not.toContain("test-class")
// })

// test("should return a class name when image is visible and loading class is passed", () => {
//     const image = TestUtils.renderIntoDocument(
//         <VisibleImage
//             className="my-class"
//             src="http://github.com"
//             loadingClassName="test-class"
//             forceShow={true}
//         />
//     )

//     expect(image.getClassName()).toBe("my-class")
// })

// test("should return a class name when image is visible and loading class is passed", () => {
//     const image = TestUtils.renderIntoDocument(
//         <VisibleImage
//             className="my-class"
//             src="http://github.com"
//             loadingClassName="test-class"
//             forceShow={true}
//         />
//     )

//     expect(image.getClassName()).toBe("my-class")
// })
