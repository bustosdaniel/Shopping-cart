import React, { Component } from 'react'

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    color: '#0A203E',
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  container: {
    width: '1200px'
  }
}

export default class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    )
  }
}
