import React, { Component } from 'react';
import Image from './ui/image';
import Link from './ui/link';
import hljs from 'highlight.js';

export default class Renderer extends Component {
  componentDidMount() {
    this.initHighlighting();
  }

  componentDidUpdate() {
    this.initHighlighting();
  }

  initHighlighting() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }


  render() {
    const { component: Component, pagePath } = this.props;

    return (
      <Component
        components={{
          img: props => <Image pagePath={pagePath} {...props} />,
          a: Link
        }}
      />
    )
  }
}
