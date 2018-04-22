// import _ from 'lodash'


// const parseSort = sort => {

//     return sort.reduce((acc, { sortBy, sortDirection }) => {

//         const sorts = _.join(_.map(sortBy.split('|'), field => `&sort=${field},${sortDirection}`), '')

//         return ${acc}${sorts}
//     }, '')
// }



export default params => {

    return Object.entries(params).reduce((acc, param, key) => {

        // if (key === 'sortorder') {

        //     return ${acc}${parseSort(param)}
        // }
        return !(param === undefined) ? `${acc}&${param[0]}=${param[1]}` : acc
    }, '?')

}