import { Component } from 'react'
import Button from './Button'

const style = {
  product: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px'
  },
  image: {
    width: '100%',
    height: '250px'
  }
}

class Product extends Component {
  render() {
    const { product, agregarAlCarro } = this.props
    return (
      <div style={style.product}>
        <img style={style.image} src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => agregarAlCarro(product)}>
          Agregar al carro
        </Button>
      </div>
    )
  }
}
export default Product
