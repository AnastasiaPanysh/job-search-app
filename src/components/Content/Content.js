import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/storage.json';
import axios from 'axios';

function Content({ searchString, salaryFilter, industryFilter }) {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);
  const [accessToken, setAccessToken] = useState('');


  function filterVacancy() {
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

  useEffect(() => {
    // const performAuthorization = async () => {
    //   try {
    //     const response = await axios.get(
    //       'https://api.superjob.ru/2.0/oauth2/password/?login=nastya.panysh@gmail.com&password=Nastya94&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    //       // {
    //       //   login: 'nastya.panysh@gmail.com',
    //       //   password: 'Nastya94',
    //       //   client_id: '2356',
    //       //   client_secret:
    //       //     'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    //       //   hr: '0'
    //       // },
    //       {
    //         headers: {
    //           'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    //         }
    //       }
    //     );

    //     const accessToken = response.data.access_token;
    //     setAccessToken(accessToken);
    //     console.log(accessToken);
    //   } catch (error) {
    //     console.error('Ошибка авторизации', error);
    //   }
    // };

    const fetchVacancies = async () => {
      try {
        const response = await axios.get(
          'https://api.superjob.ru/2.0/vacancies/',
          {
            headers: {
              'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer v3.r.137565249.e28e5c69be8e4ff7a749fb84d229f26fe69ec495.0377f2eaf1672c1d2ec04c6cedf2910e21f3ebdd`
              // 'Authorization': `Bearer ${accessToken}`
            }
          }
        );

        console.log(response);
      } catch (error) {
        console.error('Ошибка при получении вакансий', error);
      }
    };

    // performAuthorization();
    fetchVacancies();
  }, []);

  useEffect(() => {
    setList(filterVacancy());
  }, [searchString]);



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
