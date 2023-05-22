import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/storage.json';

function Content({ searchString, salaryFilter, industryFilter }) {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);

  function filterVacancy () {
    if (!searchString && !salaryFilter && !industryFilter) return storage;
  
    return storage.filter(({ vacancy, salary, category }) => {
      const lowerCaseVacancy = vacancy.toLowerCase();
      const filterSalary = parseInt(salary.split(' ')[2]);
      const filterValueFrom = parseInt(salaryFilter.salaryFrom);
      const filterValueTo = parseInt(salaryFilter.salaryTo);
  
      return (
        (!searchString || lowerCaseVacancy.includes(searchString.toLowerCase())) &&
        (!salaryFilter.salaryFrom || (filterSalary && filterSalary >= filterValueFrom)) &&
        (!salaryFilter.salaryTo || (filterSalary && filterSalary <= filterValueTo)) &&
        (!industryFilter || category === industryFilter)
      );
    });
  };

  const paginatedList = filterVacancy().slice(
    (currentPage - 1) * pageSizeRef.current,
    currentPage * pageSizeRef.current
  );

  useEffect(() => {
    setList(filterVacancy());
    setCurrentPage(1);
  }, [searchString, salaryFilter, industryFilter]);

  return (
    <div>
      {paginatedList.map((el, index) => (
        <Item key={index} vacancyItem={el} />
      ))}
      <Pagination
        total={Math.ceil(list.length / pageSizeRef.current)}
        value={currentPage}
        onChange={(page) => setCurrentPage(page)}
        position="center"
      />
    </div>
  );
}

export default Content;
