import style from "./Footer.module.css"
import FooterItem from "./FooterItem"

function Footer() {
    const arr = ['Контакты', 'Система лояльности', 'Обмен и возврат', 'Доставка и оплата']
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                {arr.map((el, index) => <FooterItem key={index} name={el} />)}
            </nav>
        </div>
    )
}

export default Footer