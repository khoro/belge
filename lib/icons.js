import { exec } from 'child-process-promise';

export const fetchIcons = () => {
  const fontelloPath = require.resolve('fontello-cli/lib/cli.js');

  return exec(`
    node ${fontelloPath} install\
     --config ${process.cwd()}/docs/fontello.config.json \
     --css ${__dirname}/../static/font \
     --font ${__dirname}/../static/font
  `)
}
