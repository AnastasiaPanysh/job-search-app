import React, { useState } from 'react';
import Header from '../../Components/Header/Header.js';
import Filters from '../../Components/Filters/Filters.js';
import List from '../../Components/Content/List.js';
import Search from '../../Components/Search/Search.js';
import style from './style.module.scss';


function HomePage() {
    const [searchString, setSearchString] = useState('');

    return (
        <div className={style['wrapper']}>
            <Header />
            <div className={style['filter']}>
                <Filters />
                
                <div className={style['content']}>
                    <Search setSearchString={setSearchString}/>
                    <List searchString={searchString} />
                </div >
            </div >
        </div >
    );
}

export default HomePage;