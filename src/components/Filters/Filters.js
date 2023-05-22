import React, { useState } from 'react';
import style from './Filters.module.scss';
import { Select, Button, NativeSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import categoty from '../../storage/category.json';

function Filters({ setSalaryFilter, setVacancyFilter, setIndustryFilter }) {
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');
  const [vacancy, setVacancy] = useState('');
  const [industry, setIndustry] = useState('');

  function handleApplyFilters() {
    const filters = {
      salaryFrom,
      salaryTo,
      vacancy,
      industry
    };

    setSalaryFilter(filters);
    setVacancyFilter(vacancy);
    setIndustryFilter(industry);
  }

  return (
    <div className={style['wrapper']}>
      <div className={style['flex']}>
        <h2>Фильтры</h2>
        <div className={style['close']}>
          <p>Сбросить все</p>
          <div className={style['close-img']}> </div>
        </div>
      </div>

      <div className={style['industry']}>
        <h3>Отрасль</h3>

        <NativeSelect
          size="lg"
          placeholder="Выберете отрасль"
          data={categoty.map((el) => el.category)}
          value={industry}
          onChange={(event) => setIndustry(event.currentTarget.value)}
          rightSection={<IconChevronDown />}
        />
      </div>

      <div className={style['salary']}>
        <h3>Оклад</h3>
        <div className={style['selectors']}>
          <Select
            data={['30000', '40000', '50000', '60000', '70000']}
            value={salaryFrom}
            onChange={(value) => setSalaryFrom(value)}
            placeholder="От"
          />
          <Select
            data={['30000', '40000', '50000', '60000', '70000']}
            value={salaryTo}
            onChange={(value) => setSalaryTo(value)}
            placeholder="До"
          />
        </div>
      </div>

      <Button className={style['btn']} onClick={handleApplyFilters}>
        Применить
      </Button>
    </div>
  );
}

export default Filters;
