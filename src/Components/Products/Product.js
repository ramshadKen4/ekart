import React from 'react'
import './Product.css'
function Product() {
    return (
        <div>
            <section class="product">
                <div class="product__photo">
                    <div class="photo-container">
                        <div class="photo-main">
                            <img src="https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg" alt="green apple slice" />
                        </div>

                    </div>
                </div>
                <div class="product__info">
                    <div class="title">
                        <h1>Delicious Apples and take</h1>
                    </div>
                    <div className='bottom'>
                        <div class="price">
                            <span>$ 7.93</span>
                        </div>
                        <div class="reviews">
                            <ul class="stars">
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            </ul>
                            <span>(64)</span>
                        </div>
                        <button class="buy--btn">ADD TO CART</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product