import React from 'react'
import Product from '../Product/Product';
import './Main.scss'

export default function Main(props) {
  const { products } = props;

  return (
    <main className='background col2'>
      <h2>Produtos</h2>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}