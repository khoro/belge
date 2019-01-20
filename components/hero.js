import React from 'react';
import { Link } from '@routes';
import { isExternalUrl } from '@lib/utils';
import project from '@lib/project';

export default ({ title, description, links, background, inverted }) => {
  const secondaryColor = inverted ? 0 : 255;

  return (
    <div className="root">
      <h1>{title}</h1>
      {description && (
        <p>{description}</p>
      )}
      {links && (
        <ul>
          {links.map(link => (
            <li>
              <Link to={link.href}>
                <a
                  className={link.primary && 'primary'}
                  target={isExternalUrl(link.href) ? '_blank' : '_self'}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .root {
          background: ${background || project.colors.primary};
          text-align: center;
          padding: 100px 30px;
        }

        h1 {
          margin: 0;
          font-weight: 500;
          font-size: 42px;
          color: rgba(${secondaryColor}, ${secondaryColor}, ${secondaryColor}, 0.9);
        }

        p {
          font-size: 24px;
          margin: 0;
          margin-top: 15px;
          color: rgba(${secondaryColor}, ${secondaryColor}, ${secondaryColor}, 0.7);
          font-weight: 300;
        }

        ul {
          margin: 0;
          margin-top: 45px;
          padding: 0;
          list-style: none;
          display: flex;
          justify-content: center;
        }

        ul li {
          margin: 0 7px;
        }

        ul li a {
          display: block;
          border: 1px solid rgba(${secondaryColor}, ${secondaryColor}, ${secondaryColor}, 0.35);
          border-radius: 2px;
          padding: 13px 20px;
          color: rgba(${secondaryColor}, ${secondaryColor}, ${secondaryColor}, 0.75);
          text-decoration: none;
          font-size: 18px;
          transition: all ease 0.2s;
        }

        ul li a:hover {
          border-color: #fff;
          color: #fff;
        }

        ul li a.primary {
          background: rgba(${secondaryColor}, ${secondaryColor}, ${secondaryColor}, 0.85);
          border-color: transparent;
          color: ${background || project.colors.primary};
        }

        ul li a.primary:hover {
          background: #fff;
        }
      `}</style>
    </div>
  )
}
