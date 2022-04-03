import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
  return (
    <><li className="header__nav-item index" style={{listStyle: 'none',textDecoration :'none',}}>
      <NavLink className="header__nav-link" aria-current="page" to="/">Home</NavLink>
    </li><li className="header__nav-item"  style={{listStyle: 'none',}}>
      
        <NavLink className="header__nav-link"  to="/product">Giới Thiệu</NavLink>
      </li><li className="header__nav-item"  style={{listStyle: 'none',}}>
        <a href="./listProduct.html" className="header__nav-link">Sản Phẩm</a>
      </li><li className="header__nav-item"  style={{listStyle: 'none',}}>
        <a href="news.html" className="header__nav-link">Tin Tức</a>
      </li><li className="header__nav-item"  style={{listStyle: 'none',}}>
        <a href="contact.html" className="header__nav-link">Liên Hệ</a>
      </li><ul className="navbar-nav me-auto mb-2 mb-lg-0">



        
        {/* <li className="nav-item">
          <NavLink className="header__nav-item" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/product">Manager Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">Manager Product</NavLink>
        </li> */}
      </ul></>
  )
}

export default Menu