import React from 'react'
import './Product.scss'

export default function Product(props) {
   const { product } = props;
  return (
    <div>
       <img className='product-img' src={product.image} alt={product.name} />
       <h3>{product.name}</h3>
       <div>$ {product.price}</div>
       <div>
          <button>Adicionar ao carrinho</button>
       </div>
    </div>
  )
}
