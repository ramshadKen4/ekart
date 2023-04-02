import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import Firebase from '../../config/firebase'
import { AuthContext } from '../../store/Context'
import { useNavigate } from 'react-router-dom';
function Product(props) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext)
    if (props.children) {
        var productTitle = props.children.title;
    }
    async function cartHandler() {
        if (!user) {
            navigate('/login')
        }
        else {
            Firebase.firestore().collection("user").where("uId", "==", user.uid)
            .get().then(function (querySnapshot) {
                const cart = querySnapshot.docs[0].data().cart;

                let obj = {...cart}
                const currentCartCount = cart[productTitle];
                console.log(cart[productTitle])
                    obj[productTitle] = currentCartCount ? currentCartCount+1 : 1;
                    querySnapshot.docs[0].ref.update({ cart: obj})
                })
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
                            <span>({props.children && props.children.review})</span>
                        </div>
                        <button onClick={cartHandler} class="buy--btn">ADD TO CART</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product