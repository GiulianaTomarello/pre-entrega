import React from 'react'
import CartWidget from './CartWidget'
import "./Nabvar.css";

function Nabvar() {
  return (
    <nav className='nav-menu'>
        <h2 className='titulo'>DULCEIDA BAGS</h2>
        <ul className='nav-list'>
            <li>
                <a href="/">Inicio</a>
            </li>
            <li>
                <a href="/">Productos</a>
            </li>
            <li>
                <a href="/">Nosotros</a>
            </li>
            <li>
                <CartWidget/>
            </li>

        </ul>


    </nav>
    
  )
}

export default Nabvar