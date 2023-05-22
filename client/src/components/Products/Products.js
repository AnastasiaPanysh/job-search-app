import style from './Products.module.css'
// import products from '../../storage/products'
import ProductItem from './ProductItem'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Products() {
    const [products, setProducts] = useState([])

    async function getAllProducts() {
        try {
            
            const response = await axios.get('/products')
            // console.log(response.data);
            setProducts(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <>
            <div className={style['boorivia-store']}> </div>
            <div className={style['products-wrapper']}>
                {products ? products.map((el) => <ProductItem key={el.id} id={el.id} title={el.title} price={el.price} />) : null}
            </div>


        </>

    )
}
export default Products