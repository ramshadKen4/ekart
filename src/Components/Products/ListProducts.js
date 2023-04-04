import React, { useEffect, useState } from 'react'
import './ListProducts.css'
import Product from './Product'
import Firebase from '../../config/firebase'

function ListProducts() {
    const [productList, setProductsList] = useState([]);
    useEffect(() => {
        Firebase.firestore().collection("products").get().then((snapshot) => {
            const products = snapshot.docs.map((product) => {
                return { ...product.data(), id: product.id }
            })
            setProductsList(products)
        })
    }, [])
    return (
        <div class="list_container">
            <div className='container_title'>
                <h3>Best Deals</h3>
            </div>
            <div class="flex-row">
                {
                    productList.slice(0).reverse().map((product) => {
                        return (
                            <div class="flex-item">
                                <Product>{product}</Product>
                            </div>
                        )
                    })


                }
            </div>
        </div>

    )
}

export default ListProducts