import React from 'react'
import Banner from '../Banner/Banner'
import Newsletter from '../Newsletter/Newsletter'
import ListProducts from '../Products/ListProducts'

function Home() {
    return (
        <div>
            <Banner />
            <ListProducts/>
            <Newsletter/>
        </div>
    )
}

export default Home