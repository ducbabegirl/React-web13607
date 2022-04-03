import React from 'react'

type FooterProps = {}

const Footer = (props: FooterProps) => {
    return (
        <div>
            <div>Footer</div>
           
            <div className="footer">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title" style={{fontSize:20, marginLeft:30}}>Menu</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Trang điểm mi</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Trang điểm môi</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Trang điểm mắt</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Trang điểm mặt</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Chăm sóc toàn thân </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title" style={{fontSize:20, marginLeft:30}}>Hỗ trợ khách hàng</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Hướng dẫn mua hàng</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Giải đáp thắc mắc</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Chính sách mua hàng</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link" style={{fontSize: 16, textDecoration:'none'}}>Chính sách đổi trả</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title"  style={{fontSize:20, marginLeft:30}}>Liên hệ</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <span className="footer__text"  style={{fontSize: 16, textDecoration:'none'}}>
                                        <i className="fas fa-map-marked-alt" /> 319 C16 Mai Thành Đức, Phường 15, Quận 11, Hà Nội
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link"  style={{fontSize: 16, textDecoration:'none'}}>
                                        <i className="fas fa-phone" /> 0987541787
                                    </a>
                                </li>
                                <li className="footer__item" >
                                    <a href="#" className="footer__link"  style={{fontSize: 16, textDecoration:'none'}}>
                                        <i className="fas fa-envelope" />  Ducmtph14090@fpt.edu.vn
                                    </a>
                                </li>
                                <li className="footer__item" >
                                    <div className="social-group" >
                                        <a href="#" className="social-item"><i className="fab fa-facebook-f"  style={{fontSize: 16, textDecoration:'none'}}/>
                                        </a>
                                        <a href="#" className="social-item"><i className="fab fa-twitter"  style={{fontSize: 16, textDecoration:'none'}}/>
                                        </a>
                                        <a href="#" className="social-item"><i className="fab fa-pinterest-p"  style={{fontSize: 16, textDecoration:'none'}} />
                                        </a>
                                        <a href="#" className="social-item"><i className="fab fa-invision" style={{fontSize: 16, textDecoration:'none'}} />
                                        </a>
                                        <a href="#" className="social-item"><i className="fab fa-youtube" style={{fontSize: 16, textDecoration:'none'}} />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 s-12">
                            <h3 className="footer__title" style={{fontSize:20, marginLeft:30}}>Đăng kí</h3>
                            <ul className="footer__list">
                                <li className="footer__item" >
                                    <span className="footer__text"  style={{fontSize: 16, textDecoration:'none'}}>Đăng ký để nhận được được thông tin ưu đãi mới nhất từ chúng tôi.</span>
                                </li>
                                <li className="footer__item">
                                    <div className="send-email"  style={{fontSize: 16, textDecoration:'none'}}>
                                        <input className="send-email__input" type="email" placeholder="Nhập Email..."  />
                                        <a href="#" className="send-email__link"  >
                                            <i className="fas fa-paper-plane" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
            {/* Modal Form */}
           
        </div>

    )
}

export default Footer