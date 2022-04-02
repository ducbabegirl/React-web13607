
import React from 'react'
import News from '../components/News'
import { ProductType } from '../types/produc'
type HomeProps = {
  products:ProductType[]
}

const Home = (props: HomeProps) => {
  return (
   <>

      
        
   <tbody>
      {props.products?.map((product) => {
       
       return <><tr>

         <td>{product.name}</td> <br />
         <br />
         <td>{product.price}</td>

       </tr><div className="main__tabnine">
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
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">{product.name}</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="tab-pane">
                 <div className="row">
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="tab-pane">
                 <div className="row">
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                   <div className="col l-2 m-4 s-6">
                     <div className="product">
                       <div className="product__avt">
                       </div>
                       <div className="product__info">
                         <h3 className="product__name">Kem dưỡng da NestPlae</h3>
                         <div className="product__price">
                           <div className="price__old">
                             300.000 đ
                           </div>
                           <div className="price__new">200.000 <span className="price__unit">đ</span></div>
                         </div>
                         <div className="product__sale">
                           <span className="product__sale-percent">24%%</span>
                           <span className="product__sale-text">Giảm</span>
                         </div>
                       </div>
                       <a href="product.html" className="viewDetail">Xem chi tiết</a>
                       <a href="cart.html" className="addToCart">Thêm vào giỏ</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div></>



      })}
    </tbody></>
    
    
    
  )
}

export default Home