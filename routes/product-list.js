var config = require('../config/config');

// Mock API using fixture so we're not dependent on network connectivity
var allProducts = require(config.ROOT +'/fixtures/products.json').data;

const sort = (data, sortBy) => {

    if(sortBy === 'low-high') {
        return Object.values(data).sort((a, b) => {
            return a.grossPrice - b.grossPrice
        })
    }

    if(sortBy === 'high-low') {
        return Object.values(data).sort((a, b) => {
            return a.grossPrice - b.grossPrice
        }).reverse()
    }

    if(sortBy === 'name') {
        return Object.values(data).sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    else {
        return data
    }

}
var routes = {
    init: function(app) {

        app.get('/api/products', function (req, res, next) {
            var total = allProducts.length;
            var offset = parseInt(req.query.offset) || 0;
            var limit = parseInt(req.query.limit) || 60;
            var sortBy = req.query.sortBy || '';
            if (offset > total) {
                return res.type('json').sendStatus(400);
            }

            const data = allProducts.slice(offset, offset+limit).map(function(product) {

                return {
                    id: product.id,
                    name: product.name.en,
                    price: '£' + product.price.gross / product.price.divisor,
                    grossPrice: product.price.gross / product.price.divisor,
                    designer: product.brand.name.en,
                    image: {
                        outfit: '//cache.net-a-porter.com/images/products/'+product.id+'/'+product.id+'_ou_sl.jpg'
                    }
                }
            })

            res.json({
                offset: offset,
                limit: limit,
                total: total,
                sortBy: sortBy,
                data: sortBy.length > 1
                    ? sort(data, sortBy)
                    : data
            })

        })

    }
};



module.exports = {
    routes: routes
};
