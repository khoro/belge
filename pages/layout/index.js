import React from 'react';
import { Header, Footer } from './partials';
import project from '@lib/project';
import 'normalize.css/normalize.css';
import 'highlight.js/styles/atom-one-light.css';

export default ({ children }) => {
  return (
    <div className="root">
      <Header
        logo={project.require(project.logo)}
        {...project.header}
      />

      {children}

      <Footer
        {...project.footer}
      />

      <style jsx global>{`
        html, body {
          font-family: 'Roboto', sans-serif;
          min-height: 100vh;
          color: #444;
          line-height: 1;
        }

        #__next {
          min-height: 100vh;
        }

        * {
          outline: none;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        p {
          line-height: 1.6;
        }

        a {
          color: ${project.colors.primary};
        }

        hr {
          margin: 60px 0;
          border: 0;
          height: 1px;
          background: #eee;
        }

        pre {
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        .root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .root :global(>div:nth-child(2)) {
          flex: 1;
        }
      `}</style>
    </div>
  )
}
