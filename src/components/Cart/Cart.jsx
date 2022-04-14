import React from 'react'
import './Cart.scss'

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  const shippingCost = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + shippingCost;

  return (
    <aside className='background col1'>
      <h2>Seu Carrinho</h2>
      <div>
        {cartItems.length === 0 && <div>Carrinho vazio</div>}
      </div>
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
      {cartItems.length !== 0 && (
        <div className='final-cart'>
          <hr />
          <div className="row">
            <div className="col2">Valor do Item</div>
            <div className="col1 text-right">$ {itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col2">Valor do Frete</div>
            <div className="col1 text-right">$ {shippingCost.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col2"><strong>Valor Total da Compra</strong></div>
            <div className="col1 text-right"><strong>$ {totalPrice.toFixed(2)}</strong></div>
          </div>
        </div>
      )}

    </aside>
  )
}