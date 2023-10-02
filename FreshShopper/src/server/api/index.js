const express = require('express');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');
// const {getUserById} = require('../db');
const { JWT_SECRET } = process.env;

const volleyball = require('volleyball')
apiRouter.use(volleyball)

// TO BE COMPLETED - set `req.user` if possible, using token sent in the request header
apiRouter.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');
  if (!auth) { 
    next();
  } 
  else if (auth.startsWith(prefix)) {
    // TODO - Get JUST the token out of 'auth'
    const token = auth.slice(prefix.length);
    

    try {
      console.log("token", token)
      console.log("JWT secret", JWT_SECRET)
      const { id } = jwt.verify(token, JWT_SECRET);
      // TODO - Call 'jwt.verify()' to see if the token is valid. If it is, use it to get the user's 'id'. Look up the user with their 'id' and set 'req.user'
    if (id) {
     req.user = await getUserById(id);
     next();
}
else {
  next({
    name: 'AuthorizationHeaderError',
    message: 'Authorization token malformed',
  });
}

    } catch (error) {
      console.log("something")
      console.log('Error at catch:', error)
      next(error);
    }
  } 
  else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

// const usersRouter = require('./users');
// apiRouter.use('/users', usersRouter);

// const ordersRouter = require('./orders');
// apiRouter.use('/orders', ordersRouter);

// const productsRouter = require('./products');
// apiRouter.use('/products', productsRouter);

// const orderProductsRouter = require('./order_products');
// apiRouter.use('/order_products', orderProductsRouter);

apiRouter.use((err, req, res, next) => {
  console.trace(err)
    res.status(500).send(err)
  })

module.exports = apiRouter;