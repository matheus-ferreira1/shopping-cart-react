import React from 'react'

export default function Cart(props) {
  const { carItems } = props;
  return (
    <aside className='background col1'>
      <h2>Seu Carrinho</h2>
      <div>
        {carItems.length === 0 && <div>Carrinho vazio</div>}
      </div>
    </aside>
  )
}