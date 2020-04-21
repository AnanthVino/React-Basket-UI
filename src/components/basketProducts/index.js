import React, { useState } from 'react'
import Products from '../../constants/product'
import styled from 'styled-components'
import loadable from '@loadable/component'

const BasketProduct = loadable(() => import('../basketProduct'))
const BasketTotals = loadable(() => import('../basketTotals'))

const Content = styled.div`
    text-align: center;
`

const BasketProducts = () => {
    const [products, setProducts] = useState(Products)

    return (
        <div className="container">
            <h2 className="text-white text-lg font-weight-bold mb-4"><i className="fas fa-shopping-cart"></i> Shopping cart</h2>
            <div className="card">
                {products.length > 0 ? (
                    <table className="table table-hover">
                        <thead className="text-muted">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th scope="col" width="60">Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {products.map((product, index) => (
                            <BasketProduct product={product} key={index} products={products} setProducts={setProducts}/>
                        ))}
                    </table>
                ) : (
                    <Content className="p-5">
                        <p style={{ fontSize: 50 }}></p>
                        <p>Nothing to see here </p>
                        <button type="button" className="btn btn-outline-info" onClick={() => window.location.reload(false)}> Click to basket</button>
                    </Content>
                )} 
                {products.length > 0 ?
                    <div className="card-footer text-muted">
                        <BasketTotals products={products} setProducts={setProducts} currency="$"/>
                    </div> : ''
                }
            </div>
        </div>
    )
}

export default BasketProducts