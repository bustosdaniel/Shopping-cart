import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/tomate.jpg' },
      { name: 'Arbeja', price: 2500, img: '/verdura.jpg' },
      { name: 'Huevos', price: 800, img: '/huevos.jpg' }
    ],
    cart: [],
    isCartVisible: false
  }

  agregarAlCarro = (product) => {
    const { cart } = this.state
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              amount: x.amount + 1
            }
          : x
      )
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({ ...product, amount: 1 })
    })
  }

  showCart = () => {
    if (!this.state.cart.length) {
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products
            agregarAlCarro={this.agregarAlCarro}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
