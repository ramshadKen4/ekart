import React, { useContext, useEffect, useState } from 'react'
import ReactiveButton from 'reactive-button';
import firebase from '../../config/firebase'
import { AuthContext } from '../../store/Context'


function Item(props) {
    const [product, setProduct] = useState(0)
    const [btnState, setBtnState] = useState('idle')

    const [count, setCount] = useState(props.children[1]);
    const { user, setUser } = useContext(AuthContext)
    if (props.children) {
        var productTitle = props.children[0];
    }
    useEffect(() => {
        if (!props.children) {
            return
        }
        firebase.firestore().collection("products").where("title", "==", props.children[0])
            .get().then(function (querySnapshot) {
                const product = querySnapshot.docs[0].data();
                setProduct(product)
            })
    }, [props.children, count])
    const removeItem = () => {
        setBtnState('loading')
        firebase.firestore().collection("user").where("uId", "==", user.uid)
            .get().then(function (querySnapshot) {
                const cart = querySnapshot.docs[0].data().cart;
                let obj = { ...cart }
                const currentCartCount = props.children[1]
                obj[productTitle] = currentCartCount ? currentCartCount - 1 : 1;
                if (currentCartCount == 1) {
                    delete obj[productTitle]
                }
                querySnapshot.docs[0].ref.update({ cart: obj }).then(() => {
                    firebase.firestore().collection("products").where("title", "==", props.children[0])
                        .get().then(function (productSnapashot) {
                            const stock = productSnapashot.docs[0].data().stock;
                            productSnapashot.docs[0].ref.update({ stock: stock + 1 }).then(() => {
                                setCount(count - 1)
                                setBtnState('success')
                            })
                        })
                })
            })
    }
    if (count <= 0) {
        return
    } else {
        return (
            <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div class="d-flex flex-row"><img class="rounded" src={product.image} width="40" />
                    <div class="ml-2"><span class="font-weight-bold d-block">{
                        props.children && props.children[0]
                    }</span></div>
                </div>
                <div class="d-flex flex-row align-items-center"><span class="d-block">{count && count}</span>
                    <span class="d-block ml-5 mr-3 font-weight-bold">$ {product.price}</span>
                    <ReactiveButton
                        className="buy--btn"
                        buttonState={btnState}
                        idleText="remove "
                        loadingText="Loading"
                        successText="removed"
                        size='normal'
                        color='red'
                        onClick={removeItem}
                    ></ReactiveButton>
                </div>
            </div>
        )
    }
}

export default Item