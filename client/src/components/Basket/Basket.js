import style from "./Basket.module.css"
import ProductItem from "./ProductItem"
import { useEffect, useState } from 'react'
import axios from "axios"

function Basket() {
    let [arrayBasket, setArrayBasket] = useState([])

    function doDeclination() {
        let amount = 0
        if (arrayBasket.length === 1) amount = `${arrayBasket.length} товар`
        else if (arrayBasket.length === 2 || arrayBasket.length === 3 || arrayBasket.length === 4) amount = `${arrayBasket.length} товара`
        else amount = `${arrayBasket.length} товаров`
        return amount
    }

    async function getBasketProducts() {
        try {
            const response = await axios.get('/basket')
            console.log(response.data);
            setArrayBasket(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getBasketProducts()
    }, [])

    return (
        <div className={style["wrapper"]}>
            <div className={style["img-basket"]}></div>
            <div className={style["wrapper-basket"]}>
                {arrayBasket.map(el => <ProductItem key={Math.random()} id={el.id} title={el.title} price={el.price} setArrayBasket={setArrayBasket} />)}
            </div>

            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                <p className={style["quantity"]}>{doDeclination()}</p>
            </div>
            <div className={style["total-count"]}>
                <p>Сумма заказа:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
                <p className={style["count"]}>{arrayBasket.reduce((sum, el) => sum + el.price, 0)} ₴</p>
            </div>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default Basket