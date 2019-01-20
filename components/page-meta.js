import React, { Component } from 'react';
import Head from 'next/head';

export const PageMetaContext = React.createContext();


export default class PageMeta extends Component {
  static contextType = PageMetaContext;

  render() {
    const { title } = this.props;
    this.context && this.context.setMeta({ title });
    return null;
  }
}
