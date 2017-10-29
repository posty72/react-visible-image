import * as React from 'react'
import * as TestUtils from 'react-dom/test-utils'
import * as renderer from 'react-test-renderer'
import { Image } from './image'

test('renders correctly with an image', () => {
    const tree = renderer.create(
        <Image initialImage="https://twitter.com" image="http://www.facebook.com" />
    ).toJSON()

    expect(tree).toMatchSnapshot()
})

test('renders correctly without an image', () => {
    const tree = renderer.create(
        <Image image="http://www.facebook.com" />
    ).toJSON()

    expect(tree).toMatchSnapshot()
})

test('should return the default loading class name', () => {
    const image = TestUtils.renderIntoDocument(<Image image="http://github.com" />)

    expect(image.getClassName()).toBe('is-loading')
})

test('should return a provided loading class name', () => {
    const image = TestUtils.renderIntoDocument(<Image image="http://github.com" loadingClassName="test-class" />)

    expect(image.getClassName()).toBe('test-class')
})

test('should not return a loading class name when image is visible', () => {
    const image = TestUtils.renderIntoDocument(<Image image="http://github.com" shouldShow={true} />)

    expect(image.getClassName()).toBe('')
})

test('should not return a loading class name when image is visible and loading class is passed', () => {
    const image = TestUtils.renderIntoDocument(<Image image="http://github.com" loadingClassName="test-class" shouldShow={true} />)

    expect(image.getClassName()).not.toContain('test-class')
})

test('should return a class name when image is visible and loading class is passed', () => {
    const image = TestUtils.renderIntoDocument(<Image className="my-class" image="http://github.com" loadingClassName="test-class" shouldShow={true} />)

    expect(image.getClassName()).toBe('my-class')
})

test('should return a class name when image is visible and loading class is passed', () => {
    const image = TestUtils.renderIntoDocument(<Image className="my-class" image="http://github.com" loadingClassName="test-class" shouldShow={true} />)

    expect(image.getClassName()).toBe('my-class')
})
