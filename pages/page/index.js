import React, { Component } from 'react';
import Layout from '../layout';
import project from '@lib/project';
import { Renderer } from '@components';
import { parse } from '@lib/page';

export default class Page extends Component {
  render() {
    const page = parse(this.props.router.query.slug || 'home');

    return (
      <Layout>
        <Renderer
          component={page.Content}
          pagePath={page.path}
        />

        <style jsx global>{`
          h1 {
            margin-top: 60px;
          }

          pre {
            padding: 16px;
            overflow: auto;
            font-size: 85%;
            line-height: 1.45;
            background-color: #f6f8fa;
            border-radius: 3px;
          }

          code {
            font-family: "Source Code Pro", Menlo, monospace;
            border-radius: 3px;
            background: transparent !important;
          }
        `}</style>
      </Layout>
    )
  }
}
