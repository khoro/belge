import React from 'react';
import { Container, Row, Col } from 'gridual';
import { Link } from '@routes';
import { isExternalUrl } from '@lib/utils';
import project from '@lib/project';

export default ({ logo, links }) => {
  return (
    <div className="root">
      <div className="content">
        <div className="inner">
          <Container>
            <Row middle>
              <Col md="1/3">
                <Link to="/">
                  <a className="logo">
                    <img src={logo} />
                  </a>
                </Link>
              </Col>
              <Col md="2/3">
                <ul className="links">
                  {links.map(link => (
                    <li>
                      <Link to={link.href}>
                        <a target={isExternalUrl(link.href) ? '_blank' : '_self'}>
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <style jsx>{`
        .root {
          height: 55px;
          line-height: 0;
          font-size: 15px;
        }

        .content {
          background: ${project.colors.primary};
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          height: 55px;
          display: flex;
          align-items: center;
        }

        .inner {
          width: 100%;
        }

        .logo {
          line-height: 0;
        }

        .logo img {
          max-height: 24px;
        }

        .links {
          display: flex;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
          list-style: none;
          padding-top: 1px;
        }

        .links li {
          line-height: 1;
          margin-left: 18px;
          padding-left: 18px;
          border-left: 1px solid rgba(255, 255, 255, 0.25);
          height: 18px;
          display: flex;
          align-items: center;
          font-weight: 500;
        }

        .links li:first-child {
          border: 0;
        }

        .links li a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
