import React, { Component } from 'react';
import { Renderer } from '@components';
import project from '@lib/project';
import 'github-markdown-css/github-markdown.css';

export default class Content extends Component {
  render() {
    const { page } = this.props;

    return (
      <div ref="el" className="markdown-body">
        <Renderer
          component={page.Content}
          pagePath={page.path}
        />

        <style jsx>{`
          .markdown-body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
          }

          :global(.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5) {
            font-weight: 500 !important;
            margin-top: 30px !important;
            margin-bottom: 20px !important;
          }

          :global(.markdown-body h1) {
            font-size: 28px;
            margin-top: 0 !important;
          }

          .markdown-body :global(code) {
            font-family: "Source Code Pro", Menlo, monospace;
          }

          .markdown-body :global(hr) {
            height: 2px;
            margin: 30px 0;
          }

          :global(.markdown-body p, .markdown-body pre, .markdown-body blockquote, .markdown-body ul) {
            margin-bottom: 20px !important;
          }

          :global(.markdown-body a) {
            color: ${project.colors.primary};
          }
        `}</style>
      </div>
    )
  }
}
