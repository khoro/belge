import React from 'react';
import path from 'path';
import project from '@lib/project';
import { isExternalUrl } from '@lib/utils';

export default ({ src, pagePath }) => {
  let imgSrc;

  if (isExternalUrl(src)) {
    imgSrc = src;
  } else {
    const dir = path.dirname(pagePath);
    imgSrc = project.require('./' + path.join(dir, src));
  }

  return (
    <img src={imgSrc} />
  )
}
