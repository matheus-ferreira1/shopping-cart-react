import React from 'react'
import './Cart.scss'

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <aside className='background col1'>
      <h2>Seu Carrinho</h2>
      <div>
        {cartItems.length === 0 && <div>Carrinho vazio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row align-row">
            <div className="col2">{item.name}</div>
            <div className="col2 btn-container">
              <button onClick={() => onRemove(item)}>-</button>
              <button onClick={() => onAdd(item)}>+</button>
            </div>
            <div className="col2 text-right">
              {item.qty} x $ {item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}