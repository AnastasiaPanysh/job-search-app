import Header from "../Header/Header"
import style from "./NotFound.module.css"

function NotFound() {
    return (
        <div className={style["not-found"]}>
            <div className={style["img"]}></div>
            <p>Страница не найдена, но у нас есть еще много всего интересного</p>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default NotFound