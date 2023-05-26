import React, { useState, useEffect } from 'react';
import List from '../../components/Content/List';
import Search from '../../components/Search/Search';
import style from './style.module.css';
import Header from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';

function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [expression, setExpression] = useState({ industry: 'default', salaryFrom: '', salaryTo: '' });

  useEffect(() => {
    console.log(expression);
  }, [expression]);

  return (
    <div className={style.wrapper}>
      <Header />

      <div className={style.preview}>
        <Filters setExpression={setExpression} />

        <div className={style.content}>
          <Search setSearchString={setSearchString} />
          <List expression={expression} searchString={searchString} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
