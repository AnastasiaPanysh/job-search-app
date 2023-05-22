import style from "./Basket.module.css"
import axios from "axios"

function ProductItem({ id, title, price, setArrayBasket }) {

    async function deleteProduct() {
        try {
            const response = await axios.delete(`/basket/${id}`)
            console.log(response.data);
            setArrayBasket(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    return (

        <div className={style["product"]}>
            <div className={style['block-info']}>
                <div className={style['product-img']}></div>

                <div className={style["product-info"]}>
                    <h2>{title}</h2>
                    <p className={style["price"]}>{price}</p>
                </div>
            </div>
            <div onClick={deleteProduct} className={style["product-delete"]}></div>
        </div>

    )
}

export default ProductItem