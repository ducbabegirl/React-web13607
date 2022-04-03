
import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import Footer from "./Footer";

import '../Apphome.css';
import '../pro.css';
import '../produc.css';
import '../libra.css';
import '../new.css';

import logo from "../img/logo.png";
import slidea from "../img/slide-3.jpg";
import slideb from "../img/slide-4.jpg";
import slidec from "../img/slide-6.jpg";


import BackgroundHeader from "../img/ban.gif";
const BackgroundHead = {
  backgroundImage: 'url(' + BackgroundHeader + ')',

}
const Header = () => {
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-light" />
    <div className="container-fluid"  style={{background: '#c3e6ea'}}>
      <NavLink className="navbar-brand" to="/">
       
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">


      </div>
      <div className="header scrolling" id="myHeader">
        <div className="grid wide">
          <div className="header__top">
            <div className="navbar-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="index.html" className="header__logo">
              <img src={logo} style={{ marginLeft: 20, }} />
            </a>
            <div className="header__search">
              <div className="header__search-wrap">
                <input type="text" className="header__search-input" placeholder="Tìm kiếm" />
                <a className="header__search-icon" href="#">
                  <i className="fas fa-search" style={{color:'#9e5bab'}}></i>
                </a>
              </div>
            </div>
            <div className="header__account">
              <a href="#my-Login" className="header__account-login" style={{color:'#9e5bab'}}>Đăng Nhập</a>
              <a href="#my-Register" className="header__account-register" style={{color:'#9e5bab'}}>Đăng Kí</a>
            </div>

            <div className="header__cart have">
              <i className="fas fa-shopping-basket" style={{color:'#9e5bab', fontSize: 30}}></i>


            </div>
          </div>
        </div>

        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item nav__search">
              <div className="nav__search-wrap">
                <input className="nav__search-input" type="text" name="" id="" placeholder="Tìm sản phẩm..." />
              </div>
              <div className="nav__search-btn">
                <i className="fas fa-search"></i>
              </div>
            </li>
            <li className="header__nav-item authen-form">
              <a href="#" className="header__nav-link">Tài Khoản</a>
              <ul className="sub-nav">
                <li className="sub-nav__item">
                  <a href="#my-Login" className="sub-nav__link">Đăng Nhập</a>
                </li>
                <li className="sub-nav__item">
                  <a href="#my-Register" className="sub-nav__link">Đăng Kí</a>
                </li>
              </ul>
            </li>
            <Menu />
          </ul>
        </div>
      </div>



      <div className="main" style={{ marginTop: 0 }}>
        <div className="main__slice">
          <div className="slider">
            <div className="slide active">
              <img src={slidea} alt="" width={1450} />
              <div className="container">
                <div className="caption">
                  <h1>Giảm giá 30%</h1>
                  <p>Giảm giá cực sốc trong tháng 6!</p>
                  <a href="listProduct.html" className="btn btn--default">Xem ngay</a>

                </div>
              </div>
            </div>
            <div className="slide active" >
              <img src={slideb} alt="" width={1200} />
              <div className="container">
                <div className="caption">
                  <h1>Giảm giá 30%</h1>
                  <p>Giảm giá cực sốc trong tháng 6!</p>
                  <a href="listProduct.html" className="btn btn--default">Xem ngay</a>

                </div>
              </div>
            </div>
            <div className="slide active" >
              <img src={slidec} alt="" width={1200} />
              <div className="container">
                <div className="caption">
                  <h1>Giảm giá 30%</h1>
                  <p>Giảm giá cực sốc trong tháng 6!</p>
                  <a href="listProduct.html" className="btn btn--default">Xem ngay</a>

                </div>
              </div>
            </div>
          </div>



          {/* <img src={BackgroundHeader} alt="" style={{width:1300}}/> */}
          <div>
          </div>
        </div>
       
      </div>

      <div />
      <div>

      </div>




    </div></>



  );
};

export default Header;
