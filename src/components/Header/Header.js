import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <Link to={`/`}>
          <div className={style.logo}></div>
        </Link>

        <div className={style.nav}>
          <p>
            <Link to="/">Поиск Вакансий</Link>
          </p>
          <p>
            <Link to="/basket">Избранное</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
