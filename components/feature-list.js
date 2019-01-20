import React from 'react';
import { Container, Row, Col } from 'gridual';
import project from '@lib/project';

export default ({ width, items }) => {
  return (
    <div className="root">
      <Container>
        <Row gutter={{ xs: 30, md: 60 }} center>
          {items.map(item => (
            <Col md={width}>
              <span className="icon">
                <i className={`icon-${item.icon}`} />
              </span>
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .root {
          text-align: center;
        }

        .icon {
          font-size: 42px;
          margin-bottom: 30px;
          display: block;
          color: ${project.colors.primary};
        }

        h3 {
          color: ${project.colors.primary};
          font-size: 22px;
          font-weight: 300;
          margin-top: 0;
          margin-bottom: 15px;
        }

        p {
          margin: 0;
        }
      `}</style>
    </div>
  )
}
