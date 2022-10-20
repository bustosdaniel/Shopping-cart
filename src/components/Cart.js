import React, { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CartDetail from './CartDetail'

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#FFF',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
}

export default class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props
    const amount = cart.reduce((acc, el) => acc + el.amount, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {amount !== 0 ? <BubbleAlert value={amount} /> : null}
        </span>
        <button onClick={showCart} style={styles.cart}>
          Cart
        </button>
        {isCartVisible ? <CartDetail cart={cart} /> : null}
      </div>
    )
  }
}
