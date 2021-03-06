
import React from 'react'
import News from '../components/News'
import { ProductType } from '../types/produc'
import img from "../img/product1.jpg"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'

type HomeProps = {
  products: ProductType[]
}

const Home = (props: HomeProps) => {
  return (
    <>
     
        <div className="main__tabnine">
          <div className="grid wide">

            <div className="tabs">
              <div className="tab-item active">
                Bán Chạy
              </div>
              <div className="tab-item">
                Giá tốt
              </div>
              <div className="tab-item">
                Mới Nhập
              </div>
              <div className="line"></div>
            </div>

            <div className="tab-content">
              <div className="tab-pane active">
              <div className="row">
              {props.products?.map((product) => {
             return <div className="col l-2 m-4 s-6">
                    <div className="product">
                      <div className="product__avt" >
                      <img src={img} alt="" style={{marginLeft: 20}}/>
                     
                      </div>
                      <div className="product__info">
                        <h3 className="product__name">{product.name}</h3>
                        <div className="product__price">
                          <div className="price__old">
                            300.000 đ
                          </div>
                          <div className="price__new">{product.price} <span className="price__unit">đ</span></div>
                        </div>
                        <div className="product__sale">
                          <span className="product__sale-percent">24%</span>
                          <span className="product__sale-text">Giảm</span>
                        </div>
                      </div>
                      <a href="product.html" className="viewDetail" style={{textDecoration:'none'}}>Xem chi tiết</a>
                      <Link className="viewDetail" to={`/detailer/${product.id}/products`} style={{textDecoration:'none'}}>Xem chi tiết</Link>
                      <a href="cart.html" className="addToCart" style={{textDecoration:'none'}}>Thêm vào giỏ</a>
                    </div>
                  </div>
                   })}
                </div>
             
              </div>
            </div>
          </div>
        </div>
    <Footer/>
   </>



  )
}

export default Home