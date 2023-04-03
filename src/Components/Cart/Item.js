import React, { useContext, useEffect, useState } from 'react'
import firebase from '../../config/firebase'
import { AuthContext } from '../../store/Context'


function Item(props) {
    const [product, setProduct] = useState(0)
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
        firebase.firestore().collection("user").where("uId", "==", user.uid)
            .get().then(function (querySnapshot) {
                const cart = querySnapshot.docs[0].data().cart;
                let obj = { ...cart }
                const currentCartCount = props.children[1]
                obj[productTitle] = currentCartCount ? currentCartCount - 1 : 1;
                if (currentCartCount == 1) {
                    delete obj[productTitle]
                }
                querySnapshot.docs[0].ref.update({ cart: obj }).then((updatedData) => {
                    setCount(count - 1)
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
                    <span class="d-block ml-5 font-weight-bold">$ {product.price}</span>
                    <i class="fa fa-trash-o ml-3 text-black-50" onClick={removeItem}></i>
                </div>
            </div>
        )
    }
}

export default Item