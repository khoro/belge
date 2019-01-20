import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../layout';
import { Navigation, Content } from './partials';
import { Container, Row, Col } from 'gridual';
import project from '@lib/project';
import { parse } from '@lib/page';
import { getRootDoc } from '@lib/routing';
import path from 'path';

export default class Doc extends Component {
  render() {
    const { router } = this.props;
    const slug = router.query.slug || getRootDoc();
    const page = parse(slug);

    return (
      <Layout>
        <div className="root">
          <Head>
            <title>{page.meta.title} - {project.name}</title>
          </Head>

          <div className="content">
            <Container>
              <Row center>
                <Col md="2/9">
                  <div className="navigation-wrapper">
                    <Navigation
                      docs={project.docs}
                      currentSlug={slug}
                    />
                  </div>
                </Col>
                <Col md="7/9">
                  <div className="content-wrapper">
                    <Content
                      page={page}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <style jsx>{`
            .root {
              width: 100%;
            }

            .navigation-wrapper {
              margin: 60px 0;
            }

            .content-wrapper {
              margin: 50px 0;
            }

            @media (max-width: 768px) {
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}
