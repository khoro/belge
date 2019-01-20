import { isExternalUrl } from './utils';
import flatten from 'lodash/flatten';

const belgeFile = require(`${process.cwd()}/belge.json`);

function addPath(paths, path) {
  if (isExternalUrl(path)) return;
  if (path.startsWith('/docs')) {
    paths[path] = {
      page: '/doc',
      query: {
        slug: path.replace(/\/docs\/?/, '')
      }
    };
  } else {
    paths[path] = { page: '/page', query: { slug: path.replace(/^\//, '') } };
  }
}

function flattenDocs(array) {
  return flatten(array.map(item => {
    const result = [];
    if (item.file) result.push(item.file);
    if (item.docs) result.push(...flattenDocs(item.docs));
    return result;
  }));
}

export const collectPaths = () => {
  const paths = { '/': { page: '/page' } };

  belgeFile.header.links.forEach(link => {
    addPath(paths, link.href);
  });

  flatten(Object.values(belgeFile.footer.links)).forEach(link => {
    addPath(paths, link.href);
  });

  flatten(Object.values(belgeFile.docs)).forEach(file => {
    addPath(paths, `/docs/${file}`);
  });

  return paths;
}
