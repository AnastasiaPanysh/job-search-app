import style from './Preview.module.css'
import { useState } from 'react';
import {
    createStyles,
    Menu,
    Image,
    Group,
    rem,
    Select,
    ScrollArea,
    UnstyledButton,
    TextInput,
    // IconSearch
} from '@mantine/core';


import { IconChevronDown, IconSearch } from '@tabler/icons-react';

const data = [
    { label: 'Информационные технологии' },
    { label: 'Высший и средний менеджмент' },
    { label: 'Маркетинг, реклама, PR' },
    { label: 'Управление персоналом, тренинги' },
    { label: 'Медицина, фармацевтика' }
];

const useStylesA = createStyles((theme, { opened }) => ({
    control: {
        width: '275px',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between',
        placeholder: "Pick one",
        alignItems: 'center',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
            }`,
        transition: 'background-color 150ms ease',
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[opened ? 5 : 6]
                : opened
                    ? theme.colors.gray[0]
                    : theme.white,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    label: {
        fontWeight: 400,
        fontSize: '14px',
        color: '#ACADB9'

    },

    icon: {
        transition: 'transform 150ms ease',
        transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
}));

const useStylesB = createStyles((theme) => ({

    root: {
        position: 'relative',
        width: '275px'
    },

    input: {
        height: rem(54),
        paddingTop: rem(18),
    },

    label: {
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
    },
}));

function Preview() {

    const [search, setSearch] = useState('');
    const handleSearchChange = (event) => {
        const { value } = event.currentTarget;
        setSearch(value);
    };

    const [opened, setOpened] = useState(false);
    const { classes } = useStylesA({ opened });
    const { classesB } = useStylesB();
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
        <Menu.Item
            icon={<Image src={item.image} width={18} height={18} />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <div className={style['global-wrapper']}>

            <div className={style['wrapper']}>
                <div className={style['nav-bar']}>
                    <div className={style['wrapper-flex']}>
                        <h1>Фильтры</h1>
                        <div className={style['close']}>
                            <p>Сбросить все</p>
                            <div className={style['close-img']}> </div>
                        </div>
                    </div>
                    <h2>Отрасль</h2>
                    <Menu
                        onOpen={() => setOpened(true)}
                        onClose={() => setOpened(false)}
                        radius="md"
                        withinPortal
                    >
                        <Menu.Target>
                            <UnstyledButton className={classes.control}>
                                <Group placeholder='asddd' spacing="xs">
                                    <span className={classes.label}>{selected.label}</span>
                                </Group>
                                <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown >{items}</Menu.Dropdown>
                    </Menu>
                    <h2 className={style['h2_']}>Оклад</h2>
                    <Select
                        mt="md"
                        withinPortal
                        data={['500', '600', '700', '800', '900', '1000', '1200', '1400', '1600', '1800', '2000', '2500', '3000', '4000', '5000']}
                        placeholder="Oт"
                        classNames={classesB}
                    />
                    <Select
                        mt="md"
                        withinPortal
                        data={['550', '650', '750', '850', '950', '1000', '1200', '1400', '1600', '1800', '2000', '2500', '3000', '4000', '5000']}
                        placeholder="До"
                        classNames={classesB}
                    />
                    <div className={style['button']}>Применить</div>
                </div>
            </div>

            <div className={style['wrapper-right']}>
                <div className={style['search']}>

                    <ScrollArea>
                        <TextInput
                            placeholder="Введите название вакансии"
                            mb="md"
                            icon={<IconSearch size="0.9rem" stroke={1.5} />}
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </ScrollArea>
                </div>
            </div>
            <div className={style['btn-search']}>Поиск</div>

        </div>

    )
}
export default Preview






