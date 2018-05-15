/**
 * cleanProps - Removes properties from an object
 *
 * @param  {object} props: any          props object to be cleaned
 * @param  {array<string>} toRemove:    strings to be matched and removed
 * @return {object}                     description
 */
export function cleanProps(props: any, toRemove: Array<string>): object {
    const properties: object = { ...props }

    // Delete props passed as arguments
    toRemove.forEach((prop: string) => {
        if (properties.hasOwnProperty(prop)) {
            delete properties[prop]
        }
    })

    return properties
}
