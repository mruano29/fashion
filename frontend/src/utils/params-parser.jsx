
export default params => {

    return Object.entries(params).reduce((acc, param, key) => {

        if (param[0] === 'sortBy') {
            return `${acc}&${param[0]}=${param[1]}`
        }

        return !(param === undefined) ? `${acc}&${param[0]}=${param[1]}` : acc
    }, '?')
}
