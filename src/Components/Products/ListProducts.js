import React from 'react'
import './ListProducts.css'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './Product'

function ListProducts() {
    return (
        <div class="list_container">
            <div className='container_title'>
                <h3>Best Deals</h3>
            </div>
            <div class="flex-row">
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
                <div class="flex-item">
                    <Product></Product>
                </div>
                <div class="flex-item">
                    <Product></Product>
                </div>
                <div class="flex-item">
                    Item 7
                </div>
                <div class="flex-item">
                    Item 8
                </div>
                <div class="flex-item">
                    Item 9
                </div><div class="flex-item">
                    Item 10
                </div>
                <div class="flex-item">
                    Item 11
                </div>
                <div class="flex-item">
                    Item 12
                </div><div class="flex-item">
                    Item 13
                </div>
                <div class="flex-item">
                    Item 14
                </div>

            </div>
        </div>

    )
}

export default ListProducts