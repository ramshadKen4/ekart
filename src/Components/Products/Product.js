import React, { useContext, useState } from 'react'
import './Product.css'
import ReactiveButton from 'reactive-button';
import Firebase from '../../config/firebase'
import { AuthContext } from '../../store/Context'
import { useNavigate } from 'react-router-dom';

function Product(props) {
    const [btnState, setBtnState] = useState('idle')
    const [stock, setStock] = useState(props.children.stock)
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
            setBtnState('loading');
            Firebase.firestore().collection("user").where("uId", "==", user.uid)
                .get().then(function (querySnapshot) {
                    const cart = querySnapshot.docs[0].data().cart;
                    let obj = { ...cart }
                    const currentCartCount = cart[productTitle];
                    obj[productTitle] = currentCartCount ? currentCartCount + 1 : 1;
                    querySnapshot.docs[0].ref.update({ cart: obj })
                    Firebase.firestore().collection("products").where("title", '==', props.children.title)
                    .get().then(function (querySnapshot2) {
                        const stock = querySnapshot2.docs[0].data().stock;
                        if (stock >= 1) {
                            
                            querySnapshot2.docs[0].ref.update({ stock: stock - 1 }).then(()=>{
                                setStock(stock - 1)
                                setBtnState('success')
                            }
                                )
                            } else {
                                setBtnState('error')
                            }

                        })
                })
        }
    }
    const btnStyle = {
        padding: '1.5em 3.1em',
        margin: '20px 2px',
        border: 'none',
        borderRadius: '7px',
        fontSize: '8px',
        fontWeight: '400',
        letterSpacing: '1px',
        color: '#fff',
        backgroundColor: '#3187ED',
        boxShadow: "2px 2px 25px -7px #4c4c4c",
        cursor: 'pointer'
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
                        <span class="spec">Available Stock : {stock}
                        </span>
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
                        <ReactiveButton
                            className="buy--btn"
                            buttonState={btnState}
                            idleText={stock ? 'add to cart' : 'out of stock'}
                            loadingText="Loading"
                            successText="item added"
                            size='normal'
                            errorText='out of stock'
                            onClick={cartHandler}
                            style={btnStyle}
                            disabled={!stock}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product