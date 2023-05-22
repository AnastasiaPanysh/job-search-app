import React, { useState } from 'react';
import Header from '../../Components/Header/Header.js';
import Filters from '../../Components/Filters/Filters.js';
import Content from '../../Components/Content/Content.js';
import Search from '../../Components/Search/Search.js';
import style from './style.module.scss';
import category from '../../storage/category.json';

function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [vacancyFilter, setVacancyFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');

  return (
    <div className={style['wrapper']}>
      <Header />
      <div className={style['filter']}>
        <Filters
          setSalaryFilter={setSalaryFilter}
          setVacancyFilter={setVacancyFilter}
          setIndustryFilter={setIndustryFilter}
          category={category}
        />

        <div className={style['content']}>
          <Search setSearchString={setSearchString} />
          <Content
            searchString={searchString}
            salaryFilter={salaryFilter}
            industryFilter={industryFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
