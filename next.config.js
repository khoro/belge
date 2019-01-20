const { join } = require('path');
const { existsSync } = require('fs');
const { collectPaths } = require('./lib/export');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withTM = require('next-plugin-transpile-modules');
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx$/
});

const resolveModule = moduleName => {
  const rootPath = join(process.cwd(), 'node_modules', moduleName);
  if (existsSync(rootPath)) return rootPath;
  return join(__dirname, 'node_modules', moduleName);
}

module.exports = withTM(withMDX(withImages(withCSS({
  transpileModules: ['belge', 'pages', 'components', 'gridual', '@mdx-js'],

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mdx-js': resolveModule('@mdx-js'),
      '@project': process.cwd(),
      '@lib': __dirname + '/lib',
      '@components': __dirname + '/components',
      '@routes': __dirname + '/routes.js',
      'styled-components': resolveModule('styled-components'),
      'styled-jsx': resolveModule('styled-jsx'),
      'react': resolveModule('react'),
      'react-dom': resolveModule('react-dom')
    };

    return config;
  },

  exportPathMap: collectPaths
}))));
