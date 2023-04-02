import React, {useContext, useEffect, useState } from 'react'
import './Product.css'
import Firebase from '../../config/firebase'
import { AuthContext } from '../../store/Context'
import { useNavigate } from 'react-router-dom';
function Product(props) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext)
    async function cartHandler() {
        if(!user){
            navigate('/login')
        }
        else {
            const itemList = {car:1,jeep:12}
            Firebase.firestore().collection('cart').add({
                user:user.displayName,
                item:itemList
            }).catch()
            let cart = await (await Firebase.firestore().collection('cart').where('user','==',user.displayName).get()).docs();
            console.log(cart.docs)
        }
    }
    return (
        <div>
            <section class="product">
                <div class="product__photo">
                    <div class="photo-container">
                        <div class="photo-main">
                            <img src={props.children && props.children.image} alt="product image appears here " />
                        </div>

                    </div>
                </div>
                <div class="product__info">
                    <div class="title">
                        <h1>{props.children && props.children.title}</h1>
                    </div>
                    <div className='bottom'>
                        <div class="price">
                            <span>$ {props.children && props.children.price}</span>
                        </div>
                        <div class="reviews">
                            <ul class="stars">
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            </ul>
                            <span>({props.children&& props.children.review})</span>
                        </div>
                        <button onClick={cartHandler} class="buy--btn">ADD TO CART</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product