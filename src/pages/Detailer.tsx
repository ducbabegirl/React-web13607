
import React, { useEffect, useState } from 'react'
import { read } from '../api/products';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {ProductType} from '../types/produc'

import produca from "../img/em.jpg";
import '../detai.css';
import Footer from "../components/Footer";

type DetailerProps = {
    products: ProductType[]
   
}
type Show = {
    name: string,
    price: number
}

function Detailer (props: DetailerProps) {
    const { id } = useParams();
    const { register, formState: { errors }, reset } = useForm<Show>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        };
        getProduct();
    }, []);



    return (
<div>
  <div className="main">
    <div className="grid wide">
      <div className="productInfo">
        <div className="row">
          <div className="col l-5 m-12 s-12">
          <img src={produca} />
          </div>
          
          <div className="col l-7 m-12s s-12 pl">
            <div className="main__breadcrumb">
              <div className="breadcrumb__item">
                <a href="#" className="breadcrumb__link">Trang chủ</a>
              </div>
              <div className="breadcrumb__item">
                <a href="#" className="breadcrumb__link">Cửa hàng</a>
              </div>
              <div className="breadcrumb__item">
                <a href="#" className="breadcrumb__link">Hãng DHC</a>
              </div>
            </div>
         
            <input type="text" placeholder="" className="input" {...register('name')}/>
            <div className="productInfo__price">
            <input type="text" placeholder="" className="input" {...register('price')}/>
             <span className="priceInfo__unit">đ</span>
            </div>
            <div className="productInfo__description">
              <span> Lorem Ipsum </span> chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình
              bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho
              ngành công nghiệp in ấn
            </div>
            <div className="productInfo__addToCart">
              <div className="buttons_added">
                <input className="minus is-form" type="button" defaultValue="-" />
                <input aria-label="quantity" className="input-qty" max={10} min={1} type="number" defaultValue={1} />
                <input className="plus is-form" type="button" defaultValue="+"  />
              </div>
              <div className=" btn btn--default orange ">Thêm vào giỏ</div>
            </div>
            <div className="productIndfo__policy ">
              <div className="policy bg-1 ">
                <img src="./assets/img/policy/policy1.png " className="productIndfo__policy-img " />
                <div className="productIndfo__policy-info ">
                  <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                  <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                </div>
              </div>
              <div className="policy bg-2 ">
                <img src="./assets/img/policy/policy2.png " className="productIndfo__policy-img " />
                <div className="productIndfo__policy-info ">
                  <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                  <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                </div>
              </div>
              <div className="policy bg-1 ">
                <img src="./assets/img/policy/policy3.png " className="productIndfo__policy-img " />
                <div className="productIndfo__policy-info ">
                  <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                  <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                </div>
              </div>
              <div className="policy bg-2 ">
                <img src="./assets/img/policy/policy4.png " className="productIndfo__policy-img " />
                <div className="productIndfo__policy-info ">
                  <h3 className="productIndfo__policy-title ">Giao hàng miễn phí</h3>
                  <p className="productIndfo__policy-description ">Cho đơn hàng từ 300K</p>
                </div>
              </div>
            </div>
            <div className="productIndfo__category ">
              <p className="productIndfo__category-text"> Danh mục : <a href="# " className="productIndfo__category-link ">Nail</a></p>
              <p className="productIndfo__category-text"> Hãng : <a href="# " className="productIndfo__category-link ">The Face Shop</a></p>
              <p className="productIndfo__category-text"> Số lượng đã bán : 322</p>
              <p className="productIndfo__category-text"> Số lượng trong kho : 322</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetail ">
        <div className="main__tabnine ">
          <div className="grid wide ">
            {/* Tab items */}
            <div className="tabs ">
              <div className="tab-item active ">
                Mô tả
              </div>
              <div className="tab-item ">
                Đánh giá
              </div>
              <div className="line " />
            </div>
            {/* Tab content */}
            <div className="tab-content ">
              <div className="tab-pane active ">
                <div className="productDes ">
                  <div className="productDes__title ">Lorem Ipsum là gì?</div>
                  <p className="productDes__text "> <a href="# " className="productDes__link ">Lorem Ipsum
                    </a> chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn
                    trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho
                    ngành
                    công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                    bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã
                    tồn tại năm thế kỉ, mà khi được áp dụng vào tin học
                    văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong
                    những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum,
                    và gần đây hơn, được sử dụng trong các ứng dụng dàn trang,
                    như Aldus PageMaker.
                  </p>
                  <div className="productDes__title ">Lorem Ipsum là gì?</div>
                  <p className="productDes__text "> <a href="# " className="productDes__link ">Lorem Ipsum
                    </a> chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn
                    trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho
                    ngành
                    công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                    bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã
                    tồn tại năm thế kỉ, mà khi được áp dụng vào tin học
                    văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong
                    những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum,
                    và gần đây hơn, được sử dụng trong các ứng dụng dàn trang,
                    như Aldus PageMaker.
                  </p>
                </div>
              </div>
              <div className="tab-pane ">
                <div className="productDes__ratting ">
                  <div className="productDes__ratting-title ">Đánh giá của bạn</div>
                  <div className="productDes__ratting-wrap">
                    <div id="rating">
                      <input type="radio" id="star5" name="rating" defaultValue={5} />
                      <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                      <input type="radio" id="star4half" name="rating" defaultValue="4 and a half" />
                      <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
                      <input type="radio" id="star4" name="rating" defaultValue={4} />
                      <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                      <input type="radio" id="star3half" name="rating" defaultValue="3 and a half" />
                      <label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
                      <input type="radio" id="star3" name="rating" defaultValue={3} />
                      <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                      <input type="radio" id="star2half" name="rating" defaultValue="2 and a half" />
                      <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
                      <input type="radio" id="star2" name="rating" defaultValue={2} />
                      <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                      <input type="radio" id="star1half" name="rating" defaultValue="1 and a half" />
                      <label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
                      <input type="radio" id="star1" name="rating" defaultValue={1} />
                      <label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
                      <input type="radio" id="starhalf" name="rating" defaultValue="half" />
                      <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
                    </div>
                    <textarea className="ratecomment" name=" " id=" " cols={30 } rows={1} placeholder="Vui lòng viết đánh giá của bạn " defaultValue={""} />
                  </div>
                  <input type="submit " className="btn btn--default" defaultValue="Đánh giá" />
                </div>
                <ul className="rate__list">
                  <li className="rate__item">
                  </li>
                  <li className="rate__item">
                    <div className="rate__info">
                      <div className="fb-comments" data-href="https://developers.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHasu03%2Fposts%2F630616701342656&show_text=true&width=500" data-width data-numposts={5}>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__frame ">
        <div className="grid wide ">
          <h3 className="category__heading ">Sản Phẩm Tương tự</h3>
          <div className="owl-carousel hight owl-theme ">
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
              <div className="product__avt " style={{backgroundImage: 'url(assets/img/product/sp.jpg)'}}>
              </div>
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
            <a href="# " className="product ">
            <img src={produca} />
             
              <div className="product__info ">
                <h3 className="product__name ">Framed-Sleeve Tops Group</h3>
                <div className="product__price ">
                  <div className="price__old ">340.000 <span className="price__unit ">đ</span></div>
                  <div className="price__new ">320.000 <span className="price__unit ">đ</span></div>
                </div>
              </div>
              <div className="product__sale ">
                <span className="product__sale-percent ">22%</span>
                <span className="product__sale-text ">Giảm</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>


    );
}

export default Detailer