import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { PageMetaContext } from '../components/page-meta';
import { getRoute } from './routing';
import project from './project';

const getMeta = Content => {
  let meta;

  ReactDOMServer.renderToString(
    <PageMetaContext.Provider value={{ setMeta: val => meta = val}}>
      <Content />
    </PageMetaContext.Provider>
  );

  return meta;
}

export const parse = file => {
  const path = `./docs/${file}.mdx`;
  const Content = project.require(path).default;
  const meta = getMeta(Content) || {};
  const route = getRoute(file);

  return {
    Content,
    meta,
    route,
    path
  }
}
