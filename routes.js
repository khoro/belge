const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('doc', '/docs/:slug*');
routes.add('page', '/:slug*');

module.exports = routes;
