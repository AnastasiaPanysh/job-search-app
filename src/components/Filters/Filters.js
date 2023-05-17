import React from 'react';
import style from './Filters.module.scss';
import { Select, Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';




function Filters() {

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
                <Input component="select" placeholder='dfvfdbfbbf' rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                    <option>Выберете отрасль</option>
                    <option >Информационные технологии</option>
                </Input>
            </div>

            <div className={style['salary']}>
                <h3>Оклад</h3>

                <div className={style['selectors']}>
                    <Select

                        data={['500', '600', '700', '800', '900', '1000', '1200', '1400', '1600', '1800', '2000', '2500', '3000', '4000', '5000']}
                        placeholder="Oт"
                    />
                    <Select

                        data={['550', '650', '750', '850', '950', '1000', '1200', '1400', '1600', '1800', '2000', '2500', '3000', '4000', '5000']}
                        placeholder="До"
                    />
                </div>
            </div>

            <Button className={style['btn']}>Применить</Button>
        </div>
    );
}
export default Filters