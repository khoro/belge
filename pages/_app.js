import React from 'react';
import App, { Container } from 'next/app';

export default class KhoroDocs extends App {
  render () {
    const { Component, ...rest } = this.props

    return (
      <Container>
        <Component
          {...rest}
        />
      </Container>
    )
  }
}
