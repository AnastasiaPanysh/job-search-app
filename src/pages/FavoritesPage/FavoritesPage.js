import Favorite from '../../Components/Favorites/Favorites.js';
import Header from '../../Components/Header/Header.js';
import style from './style.module.scss'

function FavoritesPage() {

    return (
        <div className={style['wrapper']}>
            <Header />
            <div className={style['content']}>
            <Favorite />
        </div>
        </div>
    )
}

export default FavoritesPage