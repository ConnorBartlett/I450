module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*'); //indicates if response can be shared with requsting code from origin. "*" = all
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //indicates allowable methods to be used.
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); 

    next();
}