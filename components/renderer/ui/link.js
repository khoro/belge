import React from 'react';
import { Link } from '@routes';
import { isExternalUrl } from '@lib/utils';

export default ({ href, children }) => {
  if (isExternalUrl(href)) return (<a href={href}>{children}</a>);

  return (
    <Link to={href}>
      <a>{children}</a>
    </Link>
  )
}
