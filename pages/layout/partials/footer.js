import React from 'react';
import { Container, Row, Col } from 'gridual';
import { Link } from '@routes';
import { isExternalUrl } from '@lib/utils';

export default ({ links }) => {
  const sections = Object.keys(links);
  const columnWidth = `1/${sections.length + 1}`;

  return (
    <footer>
      <Container>
        <Row>
          {sections.map(section => (
            <Col md="1/4">
              <h5>{section}</h5>
              <ul>
                {links[section].map(item => (
                  <li>
                    <Link to={item.href}>
                      <a target={isExternalUrl(item.href) ? '_blank' : '_self'}>{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col md={`${4 - sections.length}/4`}>
            <div className="copyright">
              Copyright {new Date().getFullYear()} Khoro
              <a href="https://khoro.io" target="_blank">
                <img src="https://khoro.io/images/badge-transparent.png" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        footer {
          background: #f8f8f8;
          color: rgba(0, 0, 0, 0.55);
          font-size: 15px;
          padding: 60px 0;
        }

        h5 {
          color: rgba(0, 0, 0, 0.7);
          font-size: 13px;
          font-weight: 500;
          margin: 0 0 25px;
          text-transform: uppercase;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        ul li {
          margin-top: 10px;
        }

        ul li a {
          color: rgba(0, 0, 0, 0.55);
          text-decoration: none;
        }

        .copyright {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        img {
          height: 18px;
          margin-top: 25px;
          filter: grayscale(1);
          opacity: 0.4;
          transition: all ease 0.2s;
        }

        img:hover {
          opacity: 1;
          filter: none;
        }
      `}</style>
    </footer>
  )
}
