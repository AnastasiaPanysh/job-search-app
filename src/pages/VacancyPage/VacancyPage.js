import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';
import storage from '../../storage/vacancy.json';
import Vacancy from '../../components/Vacancy/Vacancy';

function VacancyPage() {
  const [vacancy, setVacancy] = useState();
  const { id } = useParams();

  useEffect(() => {
    const found = storage.find((item) => item.id == id);
    setVacancy(found);
  }, []);

  return (
    <div className={style.wrapper}>
      <Header />

      {vacancy && <Vacancy vacancy={vacancy} />}
    </div>
  );
}


export default VacancyPage;
