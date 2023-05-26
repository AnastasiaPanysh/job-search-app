import React from 'react';
import Header from '../../components/Header/Header';
import Basket from '../../components/Basket/Basket';
import style from './style.module.scss';

function BasketPage() {

    return (
        <div className={style.wrapper}>
            <Header />

            <Basket />
        </div>
    )
}

export default BasketPage;