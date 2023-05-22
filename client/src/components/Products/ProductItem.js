import style from './Products.module.css'
import {  useState } from 'react'
import axios from 'axios'

function ProductItem({ id, title, price }) {

    const [like, setLike] = useState('like')

    async function addToBasket() {
        try {
            // const keys = ?.map(el => el.id)
            // if (!keys.includes(id))
             await axios.post(`/basket/${id}`)
            // console.log(response.data);
            setLike('like-red');
        } catch (error) {
            alert(error.message)
        }
    }

    return (

        <div className={style['line-shop']}>
            <div className={style['block']}>
                <div className={style["block-image"]}>
                    <div className={style['img']}></div>
                    <div onClick={addToBasket} className={style[like]}></div>
                </div>
                <hr></hr>
                <div className={style['title-flex']}>
                    <h1>{title}</h1>
                    <p>{price}</p>
                </div>
            </div>
        </div>

    )

}

export default ProductItem