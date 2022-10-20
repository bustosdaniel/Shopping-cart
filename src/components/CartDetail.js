import React, { Component } from 'react'

const styles = {
  cartDetail: {
    backgroundColor: '#FFF',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50
  },
  ul: {
    margin: 0,
    padding: 0
  },
  product: {
    listStyleType: 'none',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: 'solid 1px #aaa'
  }
}

export default class CartDetail extends Component {
  render() {
    const { cart } = this.props
    return (
      <div style={styles.cartDetail}>
        <ul style={styles.ul}>
          {cart.map((x) => (
            <li style={styles.product} key={x.name}>
              <img src={x.img} alt={x.name} width="50px" height="32px" />
              {x.name} <span>{x.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
