import { createServer } from 'http';
import next from 'next';
import routes from './routes';
import { parse } from 'url';
import { join } from 'path';
import { fetchIcons } from './lib/icons';

const port = process.env.PORT || 4000;
const app = next({ dev: true, dir: __dirname });
const handler = routes.getRequestHandler(app);

fetchIcons();

app.prepare().then(() => {
  createServer(handler).listen(port);
});
