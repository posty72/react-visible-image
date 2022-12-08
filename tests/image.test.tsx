/* eslint-disable max-lines */
import * as React from "react";
import * as renderer from "react-test-renderer";
import { render, act } from "@testing-library/react";
import { VisibleImage } from "../src";
import { sleep } from "./utility/sleep";

const INITIAL_IMAGE = "http://example.com";
const FULL_IMAGE = "http://reactjs.org";

describe("Image component", () => {
    let intersectionRatio = 0;

    beforeEach(() => {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        function MockIntersectionObserver(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this: any,
            callback: IntersectionObserverCallback,
            _config: IntersectionObserverInit
        ) {
            this.observe = (_element: HTMLElement) => {
                // TODO: Come up with a controllable trigger
                setTimeout(
                    () =>
                        callback(
                            ([
                                { intersectionRatio },
                            ] as unknown) as IntersectionObserverEntry[],
                            this
                        ),
                    0
                );
            };
            this.unobserve = (_element: HTMLElement) => void 0;
        }
        /* eslint-enable @typescript-eslint/no-unused-vars */

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis as any).IntersectionObserver = (MockIntersectionObserver as unknown) as IntersectionObserver;
    });

    it("renders correctly with an image", () => {
        const tree = renderer
            .create(
                <VisibleImage initialSrc={INITIAL_IMAGE} src={FULL_IMAGE} />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("renders correctly without an image", () => {
        const tree = renderer
            .create(<VisibleImage src={FULL_IMAGE} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should return the default loading class name", () => {
        const element = renderer
            .create(
                <VisibleImage
                    loadingClassName="is-loading"
                    src={INITIAL_IMAGE}
                />
            )
            .toTree();

        const image = element?.rendered as renderer.ReactTestRendererTree;

        expect(image.props.className.includes("is-loading")).toBe(true);
    });

    it("should show the src image on intersect", async () => {
        const threshold = 10;
        intersectionRatio = threshold;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);

        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });

        expect(image.getAttribute("src")).toBe(FULL_IMAGE);
    });

    it("should not show the src image on no intersect", async () => {
        intersectionRatio = 0;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);

        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });

        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);
    });

    it("should not run if the intersection observer is not available", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis as any).IntersectionObserver = null;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(FULL_IMAGE);
    });

    it("the 'onShown' callback should be called", async () => {
        const threshold = 100;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onShown={callback}
            />
        );

        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });

        expect(callback).toHaveBeenCalled();
    });

    it("the 'onAppear' callback should be called", async () => {
        const threshold = 100;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onAppear={callback}
            />
        );

        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });

        expect(callback).toHaveBeenCalled();
    });

    it("the 'onVisibilityChanged' callback should be called", async () => {
        const threshold = 100;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onVisibilityChanged={callback}
            />
        );

        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });

        expect(callback).toHaveBeenCalledWith(true);
    });

    it("should show when 'show' is true", async () => {
        const threshold = 10;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onVisibilityChanged={callback}
                show
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(FULL_IMAGE);
        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });
        expect(image.getAttribute("src")).toBe(FULL_IMAGE);
    });

    it("should not show when 'show' is false", async () => {
        const threshold = 10;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onVisibilityChanged={callback}
                show={false}
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);
        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });
        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);
    });

    it("should show when 'forceShow' is true", async () => {
        const threshold = 10;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onVisibilityChanged={callback}
                forceShow
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(FULL_IMAGE);
        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });
        expect(image.getAttribute("src")).toBe(FULL_IMAGE);
    });

    it("should not show when 'forceShow' is false", async () => {
        const threshold = 10;
        const callback = jest.fn(() => void null);

        intersectionRatio = threshold;

        const { container } = render(
            <VisibleImage
                className="test"
                loadingClassName="is-loading"
                initialSrc={INITIAL_IMAGE}
                src={FULL_IMAGE}
                onVisibilityChanged={callback}
                forceShow={false}
            />
        );

        const image = container.getElementsByClassName("test")[0];

        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);
        // Wait for the setTimeout in the mock to be called, just needs to be made async
        await act(async () => {
            await sleep(0);
        });
        expect(image.getAttribute("src")).toBe(INITIAL_IMAGE);
    });
});
