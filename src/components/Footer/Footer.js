import style from './Footer.module.css'
function Footer() {
    return (
        <div className={style['wrapper']}>
            <div className={style['btn-left']}></div>
            <div className={style['btn-1']}>1</div>
            <div className={style['btn']}>2</div>
            <div className={style['btn']}>3</div>
            <div className={style['btn-right']}></div>
        </div>
    )
}

export default Footer