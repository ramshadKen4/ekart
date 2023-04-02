import React, { useEffect, useState } from 'react'
import './ListProducts.css'
import { Col, Container, Row } from 'react-bootstrap'
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
    }, [productList])
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
                <div class="flex-item">
                    <Product>sadasd</Product>
                </div>
                <div class="flex-item">
                    <Product></Product>
                </div>
                <div class="flex-item">
                    <Product></Product>
                </div>
                <div class="flex-item">
                    <Product></Product>
                </div>
                <div class="flex-item">
                    <Product></Product>
                </div>
            </div>
        </div>

    )
}

export default ListProducts