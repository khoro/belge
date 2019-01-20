import React from 'react';
import { Link } from '@routes';
import project from '@lib/project';
import { parse } from '@lib/page';

export default ({ docs, root, currentSlug }) => {
  return (
    <div className="root">
      {Object.keys(docs).map(section => (<>
        <h4>{section}</h4>
        <ul>
          {docs[section].map(doc => {
            const parsedDoc = parse(doc);

            return (
              <li className={currentSlug === doc && 'active'}>
                <Link to={parsedDoc.route}>
                  <a>
                    {parsedDoc.meta ? parsedDoc.meta.title : doc}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </>))}

      <style jsx>{`
        .root {
          flex: 1;
          overflow: auto;
          margin-bottom: 30px;
        }

        h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
        }

        ul {
          padding: 7px 10px;
          border-left: 1px dashed #ccc;
          margin: 15px 5px 30px;
          list-style: none;
        }

        li {
          margin-bottom: 15px;
          color: #444;
          font-weight: 400;
        }

        li:last-child {
          margin: 0;
        }

        li a, li a::after, li::before {
          transition: all ease 0.3s;
        }

        li a {
          color: #666;
          display: inline-block;
          text-decoration: none;
          font-weight: normal;
          font-size: 15px;
        }

        li a:hover {
          color: #aaa;
        }

        li a::after {
          content: ' ';
          display: block;
          border-bottom: 2px solid transparent;
          width: 0%;
        }

        li a:hover::after {
          border-color: #ccc;
          width: 30%;
        }

        li.active a {
          font-weight: 500;
          color: ${project.colors.primary};
        }

        li.active a::after {
          border-bottom-color: ${project.colors.primary} !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  )
}
