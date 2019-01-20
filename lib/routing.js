import project from './project';
import flatten from 'lodash/flatten';

export const getRootDoc = () => {
  return Object.values(project.docs)[0][0];
}

export const getRoute = file => {
  let route;

  const docs = flatten(Object.values(project.docs));

  if(docs[0] === file) {
    route = '/docs';
  } else if (docs.includes(file)) {
    route = `/docs/${file}`;
  } else {
    route = `/${file}`;
  }

  return route;
}
