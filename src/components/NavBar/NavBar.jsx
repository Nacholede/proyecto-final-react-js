import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
             <h2> Retrostore </h2>
            </li>
            <li>
             <a href="/"> Juegos Playstation 4 </a>
            </li>
            <li>
             <a href="/"> Juegos Playstation 5 </a>
            </li>
            <li>
             <a href="/"> Juegos Xbox One</a>
            </li>
            <li>
             <a href="/"> Juegos Xbox Series</a>
            </li>
            <li>
          <CartWidget />
        </li>
        </ul>
    </nav>
  )
}

export default NavBar;